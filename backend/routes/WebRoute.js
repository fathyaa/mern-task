import express from "express";
import {
  getData,
  saveData,
  updateData,
  deleteData,
  addTesti,
  addSkills,
  addQual,
  addSevices,
  addContact,
} from "../controllers/WebController.js";

const router = express.Router();

router.get("/", getData);
router.post("/save", saveData);
router.patch("/update/:id", updateData);
router.delete("/delete/:id", deleteData);
router.post("/testi/:id", addTesti);
router.post("/skills/:id", addSkills);
router.post("/qual/:id", addQual);
router.post("/services/:id", addSevices);
router.post("/contact/:id", addContact);

export default router;
