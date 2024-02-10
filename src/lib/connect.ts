import mongoose, { connect } from "mongoose";
import ErrorHandler from "./exceptions";

declare global {
  var conn: typeof mongoose | null;
}

let conn = global.conn;

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error(
    "Please add MONGO_URI environment variable in the .env.local file!"
  );
}

const connectDB = async () => {
  if (process.env.NODE_ENV === "production") {
    return await connect(MONGO_URI);
  } else {
    if (conn) return conn;
    try {
      conn = await connect(MONGO_URI);
      return conn;
    } catch (error) {
      console.log(
        "Error while connecting with MongoDB!",
        (error as ErrorHandler)?.message
      );
    }
  }
};

export default connectDB;
