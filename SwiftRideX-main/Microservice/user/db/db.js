const mongoose = require('mongoose');


function connect() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('user database connected');
    }).catch((error) => {
        console.log(error);
    }
    );

}

module.exports = connect;