const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./db/db");
const userRoutes = require("../Backend/routes/user.routes");
const captainRoutes = require("../Backend/routes/captain.routes");
const cookieParser = require("cookie-parser");
const mapsRoutes = require("./routes/maps.routes");
const rideRoutes = require("./routes/ride.routes");

connectToDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello jeswin");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapsRoutes);
app.use("/rides", rideRoutes);

module.exports = app;
