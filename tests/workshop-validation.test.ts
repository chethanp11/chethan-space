import assert from 'node:assert/strict';
import test from 'node:test';
import { parseWorkshopSubmission } from '../lib/workshop-validation.ts';

test('accepts and normalizes a valid submission', () => {
  assert.deepEqual(
    parseWorkshopSubmission({
      name: '  Chethan  ',
      email: '  chethan@example.com  ',
      currentLevel: '  Builder  ',
      interests: '  Responsible AI  ',
      message: '  Looking forward to learning.  '
    }),
    {
      name: 'Chethan',
      email: 'chethan@example.com',
      currentLevel: 'Builder',
      interests: 'Responsible AI',
      message: 'Looking forward to learning.'
    }
  );
});

test('normalizes omitted optional fields to empty strings', () => {
  assert.deepEqual(
    parseWorkshopSubmission({ name: 'Chethan', email: 'chethan@example.com', interests: 'AI systems' }),
    { name: 'Chethan', email: 'chethan@example.com', currentLevel: '', interests: 'AI systems', message: '' }
  );
});

test('rejects missing required fields and malformed email addresses', () => {
  assert.equal(parseWorkshopSubmission({ email: 'chethan@example.com', interests: 'AI' }), null);
  assert.equal(parseWorkshopSubmission({ name: 'Chethan', email: 'invalid', interests: 'AI' }), null);
  assert.equal(parseWorkshopSubmission({ name: 'Chethan', email: 'chethan@example.com' }), null);
});

test('rejects non-object payloads and arrays', () => {
  assert.equal(parseWorkshopSubmission(null), null);
  assert.equal(parseWorkshopSubmission('submission'), null);
  assert.equal(parseWorkshopSubmission([]), null);
});

test('rejects fields that exceed their limits', () => {
  assert.equal(
    parseWorkshopSubmission({ name: 'x'.repeat(101), email: 'chethan@example.com', interests: 'AI' }),
    null
  );
  assert.equal(
    parseWorkshopSubmission({ name: 'Chethan', email: 'chethan@example.com', interests: 'x'.repeat(2001) }),
    null
  );
});
