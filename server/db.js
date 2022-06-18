const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewurlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to database sucessfully")
    } catch (error) {
        console.log(error);
        console.log("could not connect to database!")
    }
}