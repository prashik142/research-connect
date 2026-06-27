const express = require("express");
const cors = require("cors");
const userRoutes =
  require("./routes/userRoutes");
const app = express();
const savedProjectRoutes =
  require("./routes/savedProjectRoutes");
  
app.use(cors());
app.use(express.json());
app.use(
  "/api/saved-projects",
  savedProjectRoutes
);
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("ResearchConnect Backend Running");
});
console.log("process.env.PORT =", process.env.PORT);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});