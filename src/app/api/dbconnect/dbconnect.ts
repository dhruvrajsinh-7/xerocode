import mongoose from "mongoose";

let isConnected: boolean;
let connection: mongoose.Connection | null = null;

export async function connect() {
  try {
    if (isConnected && connection) {
      return connection;
    }

    await mongoose.connect(process.env.MONGO_URI as string);
    connection = mongoose.connection;

    connection.on("connected", () => {
      isConnected = true;
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit();
    });

    return connection;
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
    throw error;
  }
}
