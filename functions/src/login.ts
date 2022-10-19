import express = require("express");
// import admin from "firebase-admin";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import GitHubStrategy = require("passport-github2");
// import {PrismaClient} from "@prisma/client";

// admin.initializeApp({
//   credential: admin.credential.cert("./src/service-account.json"),
// });
const app = express();
const Ting = GitHubStrategy.Strategy;
// const prisma = new PrismaClient();

app.use(cors({origin: "*"}));
app.use(express.json());

console.log("doing some shit");
app.use(
  session({
    secret: "bla bla bla",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
passport.serializeUser((user: any, done: any) => {
  done(null, user);
});
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Ting(
    {
      clientID: "",
      clientSecret: "",
      callbackURL:
        "http://localhost:5001/rubber-ducker-api-v2/us-central1/app/login/auth/github/callback",
    },
    async (_: string, __: string, profile: {username: string}, done: any) => {
      // const token = await admin
      //   .auth()
      //   .createCustomToken(profile.username)
      //   .catch((err) => console.log("Error creating custom token", err));

      // console.log("token", token);

      done(null, {profile});
    }
  )
);

app.get("/auth", passport.authenticate("github", {session: false}));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", {session: false}),
  async (req: any, res: any) => {
    console.log("req.user.accessToken", req.user);

    // await prisma.user.create({
    //   data: {
    //     username: req.user.profile.username,
    //     githubURL: req.user.profile.profileUrl,
    //     email: req.user.profile.email,
    //     avatarURL: req.user.profile._json.avatar_url,
    //   },
    // });
    res.redirect(`http://localhost:54321/auth/${req.user.accessToken}`);
    res.end();
  }
);

app.get("/", (req, res) => {
  return res.status(200).json("ting ting from user route");
});

module.exports = app;
