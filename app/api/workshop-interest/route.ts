import { NextResponse } from 'next/server';
import { saveWorkshopSubmission } from '@/lib/workshop';
import { parseWorkshopSubmission } from '@/lib/workshop-validation';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const submission = parseWorkshopSubmission(body);
  if (!submission) {
    return NextResponse.json({ error: 'Enter a valid name, email, and area of interest.' }, { status: 400 });
  }

  try {
    const record = await saveWorkshopSubmission(submission);
    return NextResponse.json({ id: record.id, createdAt: record.createdAt }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Submission service is temporarily unavailable. Please try again later.' },
      { status: 503 }
    );
  }
}
