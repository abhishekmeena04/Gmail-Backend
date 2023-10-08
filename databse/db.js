import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  // mongodb+srv://${USERNAME}:${PASSWORD}@gmail-clone.imx0rpj.mongodb.net/?retryWrites=true&w=majority
  const DB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.i1zqx3s.mongodb.net/?retryWrites=true&w=majority`;
  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    mongoose.set("strictQuery", false);
    console.log("Database connected sucessfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default Connection;
