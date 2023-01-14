import express from "express";
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  removeUser,
  getUserByObject,
} from "../controller/user.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/:id").get(getUser).put(updateUser).delete(removeUser);
router.route("/login").post(getUserByObject);
router.route("/signup").post(createUser);

export default router;
