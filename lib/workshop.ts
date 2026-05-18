import fs from 'fs/promises';
import path from 'path';

export type WorkshopInterestSubmission = {
  id: string;
  name: string;
  email: string;
  currentLevel: string;
  interests: string;
  message: string;
  createdAt: string;
};

const workshopDataPath = path.join(process.cwd(), 'data', 'workshop-interest.json');

async function ensureDataFile() {
  await fs.mkdir(path.dirname(workshopDataPath), { recursive: true });
  try {
    await fs.access(workshopDataPath);
  } catch {
    await fs.writeFile(workshopDataPath, '[]', 'utf-8');
  }
}

export async function getWorkshopSubmissions() {
  await ensureDataFile();
  const content = await fs.readFile(workshopDataPath, 'utf-8');
  return JSON.parse(content) as WorkshopInterestSubmission[];
}

export async function saveWorkshopSubmission(submission: {
  name: string;
  email: string;
  currentLevel: string;
  interests: string;
  message: string;
}) {
  const submissions = await getWorkshopSubmissions();
  const record: WorkshopInterestSubmission = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...submission
  };
  submissions.unshift(record);
  await fs.writeFile(workshopDataPath, JSON.stringify(submissions, null, 2), 'utf-8');
  return record;
}
