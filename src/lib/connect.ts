import mongoose, { connect } from "mongoose";
declare global {
  var conn: typeof mongoose | null;
}

const MONGO_URI = process.env.MONGO_URI;

let conn = global.conn;
const connectDB = async () => {
  if (!MONGO_URI) {
    throw new Error(
      "Please add MONGO_URI environment variable in the .env.local file!"
    );
  }
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
        (error as Error)?.message
      );
    }
  }
};

export default connectDB; 
