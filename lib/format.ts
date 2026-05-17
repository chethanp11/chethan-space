export function formatDate(date?: string): string {
  if (!date) return 'Undated';
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(date));
}
