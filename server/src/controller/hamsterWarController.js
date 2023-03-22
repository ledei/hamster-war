import {
  fetchAllHamster,
  updatePoint,
  voteHamster,
} from "../service/hamsterWarService.js";

async function showAll(req, res) {
  const hamsters = await fetchAllHamster();
  res.send(hamsters);
}

async function voteOnHamster(req, res) {
  let hamster = req.body;
  const votedHamster = await voteHamster(hamster);

  const responseData = {
    hamster: hamster,
  };

  if (votedHamster.modifiedCount == 1) {
    responseData.event = "Voted on hamster";
  } else {
    responseData.event = "failed vote on hamster";
  }
  res.send(responseData);
}

async function updateScore(req, res) {
  let hamster = req.body;
  const updateHamster = await updatePoint(hamster);
  const responseData = {
    hamster: hamster,
  };

  if (updateHamster.modifiedCount == 1) {
    responseData.event = "Hamsters score updated";
  } else {
    responseData.event = "Hamsters score failed to update";
  }
  res.send(responseData);
}

export default { showAll, voteOnHamster, updateScore };
