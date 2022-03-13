import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { apiUrl } from 'lib/config';

const hour = 60 * 60;
const day = 24 * hour;

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      authorize: async (credentials) => {
        try {
          const payload = { email: credentials.email, password: credentials.password };
          const res = await fetch(`${apiUrl}/api/users/login`, {
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
        return {
          ...token,
          name: user.username,
        };
      }
      return token;
    },
    // session is visible on the client - unsafe
    async session({ session, token }) {
      return { ...session, user: { name: token.name, email: token.email } };
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
  },
});
