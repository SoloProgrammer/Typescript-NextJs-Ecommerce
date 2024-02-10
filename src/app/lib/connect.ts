import _mongoose, { connect } from "mongoose";

declare global {
  var conn: typeof _mongoose | null;
}

let conn = global.conn;

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

export const connectDB = async () => {
  if (process.env.NODE_ENV === "production") {
    return await connect(MONGO_URI);
  } else {
    if (conn) return conn;
    conn = await connect(MONGO_URI);
    return conn;
  }
};

