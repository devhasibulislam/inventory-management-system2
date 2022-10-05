const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connection
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    dbName: "inventory-management-system",
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(colors.green(`Database connection is successful`));
  });

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(colors.green(`App is running on port ${port}`));
});
