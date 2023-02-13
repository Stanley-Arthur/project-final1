import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../utils/dbConnect";
import User from "../../../models/user";
import bcrypt from "bcryptjs";


export default NextAuth({
  session:{
    strategy: "jwt"

  },
  providers: [
    CredentialsProvider({
    
      type: "credentials",
      async authorize(credentials, req) {
        //connect to database
        await db.connect();

        const {email, password} =credentials

        console.log(email, password)

        // find user
        const user = await User.findOne({
          email: credentials.email,
        });
        

        //disconnect database
        await db.disconnect();

        // check for user's password
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
          };
        }
        throw new Error("Invalid email or password");
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error:"/login"
  },
  secret: process.env.NEXTAUTH_SECRET,

});