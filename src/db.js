import mongoose from 'mongoose'

export const dbConection = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/dynamicForms')
    console.log('Connected to the database')
  } catch (error) {
    console.error(error)
  }
}
