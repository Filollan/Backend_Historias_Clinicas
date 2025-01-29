import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://mllanten:S5JlSh8U83A4CRuu@cluster0.8ow5j.mongodb.net/`
    )

    console.log(`MongoDB Conectado`)
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}