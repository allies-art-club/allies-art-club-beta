import NextAuth from 'next-auth'

const handler = NextAuth(req,res,{

})

export {handler as GET, handler as POST}