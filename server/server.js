import express from "express";
import router from "./src/router/router.js";
import cors from "cors";

const addr = "127.0.0.1";
const port = 3030;

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api", router);

app.listen(port, addr, () => {
  console.log(`server running on port ${port}`);
});
