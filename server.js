const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors'
)

app.use(express.json());
app.use(cors())
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `DB connected successfully Server is running on port ` +
          process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));
app.use("/api/tasks", taskRoutes);
