import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://nareshbarfa007:B4bDcTdHbeSTFSTo@cluster0.j3hovhl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
  mongoose.connection.on('connected', () => console.log('Database Connected'))
  await mongoose.connect(`${process.env.MONGODB_URI || MONGODB_URI}/BookMyDoctor`)
}

export default connectDB