import { Router } from "express";
const router = Router();

import {
  create,
  findAll,
  topNews,
  findById,
  searchByTitle,
  byUser,
  update,
  erase,
} from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.meddleware.js";

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/top", topNews);
router.get("/search", searchByTitle);
router.get("/byUser", authMiddleware, byUser);
router.get("/:id", findById);
router.patch("/:id", authMiddleware, update);
router.delete("/:id", authMiddleware, erase);

export default router;
