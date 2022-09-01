import express from "express";

import * as controller from "../controllers/controllers.js";
import { INDEX_ROUTE } from "./constants.js";

const router = express.Router();

router.get(INDEX_ROUTE, controller.index);

export default router;
