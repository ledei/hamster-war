import express from "express";
import hamsterWarController from "../controller/hamsterWarController.js";

const router = express.Router();

router.get("/health", (req, res) => {
  console.log("server is alive");
  res.send("server is alive");
});
// Hämta alla hamsters
router.get("/hamsterwars/", hamsterWarController.showAll);

// Uppdatera hamsters score
router.put("/hamsterwars/:id", hamsterWarController.voteOnHamster);

// Uppdatera todo
router.put("/hamsterwars/", hamsterWarController.updateScore);

// Ta bort todo
router.delete("/todo/:id", (request, response) => {});

export default router;
