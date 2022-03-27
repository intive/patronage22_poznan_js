import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import jwt from 'jsonwebtoken';

const hour = 60 * 60;
const day = 24 * hour;

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      authorize: async ({ email, password }) => {
        try {
          const payload = { email, password };
          const loginURL = `${process.env.NEXT_PUBLIC_API_URL}/api/users/signin`;
          const res = await fetch(loginURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!res.ok) {
            return null;
          }

          const user = await res.json();

          return user || null;
        } catch (e) {
          console.error('credentials fetch error', e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return user.token;
      }
      return token;
    },
    // session is visible on the client - unsafe
    async session({ session, token }) {
      return {
        ...session,
        user: {
          name: token.username,
          email: token.email,
          avatar: token.avatar,
          createdAt: token.createdAt,
        },
      };
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * day,
    updateAge: day,
  },
  pages: {
    signIn: '/user/login',
  },
  jwt: {
    encryption: true,
    async encode({ token, secret }) {
      if (typeof token === 'string') {
        return token;
      }
      return jwt.sign(token, secret);
    },
    async decode({ token, secret }) {
      const data = jwt.verify(token, secret);
      return data;
    },
  },
});
