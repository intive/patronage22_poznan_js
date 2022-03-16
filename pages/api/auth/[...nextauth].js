import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

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
    // for cross-platform use (Android and Web), the /api/login endpoint (instead of next-auth) would generate and return the JWT and we would use that pre-made token here
    // so that Android can use the /api/login endpoint and then pass the JWT from there to /api/movies/* etc.
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
