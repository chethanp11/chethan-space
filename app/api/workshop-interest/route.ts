import { NextResponse } from 'next/server';
import { getWorkshopSubmissions, saveWorkshopSubmission } from '@/lib/workshop';

export async function GET() {
  const submissions = await getWorkshopSubmissions();
  return NextResponse.json(submissions);
}

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const currentLevel = String(body.currentLevel ?? '').trim();
  const interests = String(body.interests ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (!name || !email || !interests) {
    return NextResponse.json({ error: 'Name, email, and interest are required.' }, { status: 400 });
  }

  const record = await saveWorkshopSubmission({
    name,
    email,
    currentLevel,
    interests,
    message
  });

  return NextResponse.json(record);
}
