import { Router } from "express";
import { getInputAndShowNavigationResult } from "../controllers/insectNavigation.controller.js";

const router = Router();

router.route("/navigate").post(getInputAndShowNavigationResult);

export default router;
