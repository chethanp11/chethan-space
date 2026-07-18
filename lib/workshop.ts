import fs from 'fs/promises';
import path from 'path';
import type { WorkshopInterestInput } from './workshop-validation';

export type WorkshopInterestSubmission = WorkshopInterestInput & {
  id: string;
  createdAt: string;
};

const workshopDataPath = path.join(process.cwd(), 'data', 'workshop-interest.json');
const webhookTimeoutMs = 8000;

async function ensureDataFile() {
  await fs.mkdir(path.dirname(workshopDataPath), { recursive: true });
  try {
    await fs.access(workshopDataPath);
  } catch {
    await fs.writeFile(workshopDataPath, '[]', 'utf-8');
  }
}

async function getWorkshopSubmissions() {
  await ensureDataFile();
  const content = await fs.readFile(workshopDataPath, 'utf-8');
  return JSON.parse(content) as WorkshopInterestSubmission[];
}

async function saveToWebhook(record: WorkshopInterestSubmission, webhookUrl: string) {
  const url = new URL(webhookUrl);
  if (url.protocol !== 'https:') throw new Error('Workshop webhook must use HTTPS.');

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record),
    cache: 'no-store',
    redirect: 'error',
    signal: AbortSignal.timeout(webhookTimeoutMs)
  });

  if (!response.ok) throw new Error(`Workshop webhook returned ${response.status}.`);
}

async function saveToLocalFile(record: WorkshopInterestSubmission) {
  const submissions = await getWorkshopSubmissions();
  submissions.unshift(record);
  await fs.writeFile(workshopDataPath, JSON.stringify(submissions, null, 2), 'utf-8');
}

export async function saveWorkshopSubmission(submission: WorkshopInterestInput) {
  const record: WorkshopInterestSubmission = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...submission
  };

  const webhookUrl = process.env.WORKSHOP_INTEREST_WEBHOOK_URL;
  if (webhookUrl) {
    await saveToWebhook(record, webhookUrl);
  } else if (process.env.VERCEL) {
    throw new Error('Workshop submission storage is not configured.');
  } else {
    await saveToLocalFile(record);
  }

  return record;
}
