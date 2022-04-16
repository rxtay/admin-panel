const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected : ${con.connection.host}`)   
    } catch (err) {
        console.log(err)
        process.exit(1) //1 is true
    }
}

module.exports = connectDB