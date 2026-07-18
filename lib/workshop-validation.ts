export type WorkshopInterestInput = {
  name: string;
  email: string;
  currentLevel: string;
  interests: string;
  message: string;
};

const fieldLimits = {
  name: 100,
  email: 254,
  currentLevel: 160,
  interests: 2000,
  message: 2000
} satisfies Record<keyof WorkshopInterestInput, number>;

const fields = Object.keys(fieldLimits) as Array<keyof WorkshopInterestInput>;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(body: Record<string, unknown>, field: keyof WorkshopInterestInput): string {
  const value = body[field];
  return typeof value === 'string' ? value.trim().slice(0, fieldLimits[field] + 1) : '';
}

export function parseWorkshopSubmission(value: unknown): WorkshopInterestInput | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;

  const body = value as Record<string, unknown>;
  const submission = {
    name: readField(body, 'name'),
    email: readField(body, 'email'),
    currentLevel: readField(body, 'currentLevel'),
    interests: readField(body, 'interests'),
    message: readField(body, 'message')
  } satisfies WorkshopInterestInput;

  if (
    !submission.name ||
    !submission.email ||
    !submission.interests ||
    !emailPattern.test(submission.email) ||
    fields.some((field) => submission[field].length > fieldLimits[field])
  ) {
    return null;
  }

  return submission;
}
