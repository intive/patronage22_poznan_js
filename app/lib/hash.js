import { createHash, randomBytes } from 'crypto';

export function getPassHash(password) {
  const salt = process.env.PASS_SALT || '';
  const hash = createHash('sha256', salt).update(password).digest('base64');
  return hash;
}

export function getSessionKey() {
  const hash = createHash('sha256', process.env.NEXTAUTH_SECRET)
    .update(randomBytes(32))
    .digest('hex');
  return hash;
}
