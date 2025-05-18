// import NextAuth from 'next-auth'

// const handler = NextAuth(req,res,{

// })

// export {handler as GET, handler as POST}


// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"; // or your provider(s)

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // add more config here as needed
});

export { handler as GET, handler as POST };
