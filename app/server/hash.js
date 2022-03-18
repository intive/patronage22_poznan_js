import { createHash } from 'crypto';
import jsonwebtoken from 'jsonwebtoken';

export function getPassHash(password) {
  const salt = process.env.PASS_SALT || '';
  const hash = createHash('sha256', salt).update(password).digest('base64');
  return hash;
}

export function verifyJwtInRequest(req) {
  try {
    const authHeader = req.headers['authorization'] || '';
    const cookieJWT =
      req.cookies['next-auth.session-token'] || req.cookies['__Secure-next-auth.session-token'];
    const headerMatch = authHeader.match(/(bearer ){1}(.+)/i);
    const headerJWT = headerMatch && headerMatch[2];
    const input = headerJWT || cookieJWT;
    if (!input) return null;
    return jsonwebtoken.verify(input, process.env.NEXTAUTH_SECRET);
  } catch (e) {
    return null;
  }
}
