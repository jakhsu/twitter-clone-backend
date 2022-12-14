import express from "express";
import auth from "../middleware/auth.js";
import multer from "multer";

import {
  getTest,
  createTweet,
  followManager,
  getHome,
  getUser,
  getUserTweets,
  login,
  logintoken,
  register,
  updateUser,
  uploadImages,
} from "../controllers/user.controller.js";

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
});

const router = express.Router();

router.get("/test", getTest);

router.get("/home", getHome);

router.get("/user", getUser);

router.get("/userTweets", getUserTweets);

router.post("/register", register);

router.post("/login", login);

router.post("/auth", logintoken);

router.post("/tweet", auth, createTweet);

router.post("/upload", auth, upload.array("files"), uploadImages);

router.post("/update", auth, updateUser);

router.post("/follow", auth, followManager);

export default router;
