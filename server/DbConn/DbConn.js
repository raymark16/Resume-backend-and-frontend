const mongoose = require('mongoose')

//Should be stored in a dotenv
const mongodb_url = "mongodb+srv://raymark:raymark@cluster0.s3axojh.mongodb.net/Resume?retryWrites=true&w=majority"

const DbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || mongodb_url)
        console.log('Connected to Database')
    } catch (error) {
        console.log("can't connect to Database")
    }
}

module.exports = DbConn