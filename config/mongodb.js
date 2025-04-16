import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on('connected', () => console.log('Database Connected'))
  await mongoose.connect(`${process.env.MONGODB_URI || MONGODB_URI}/BookMyDoctor`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true, // Enable SSL
  })
}

export default connectDB