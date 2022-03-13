import { createHash, randomBytes } from 'crypto';

export function getPassHash(password) {
  const salt = process.env.PASS_SALT || '';
  const hash = createHash('sha256', salt).update(password).digest('base64');
  return hash;
}

export function getSessionKey() {
  const hash = createHash('sha256', 'patronage2022_session_secret')
    .update(randomBytes(32))
    .digest('hex');
  return hash;
}
