var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, /*useFindAndModify: false,
useCreateIndex: true*/});
var conn = mongoose.Collection;

var subscribeSchema = new mongoose.Schema({

SubscriptionEmail: {
    type: String,
    required: true
    
},
Date: {
    type: Date,
    default: Date.now
}
});

var subscribeModel = mongoose.model('subscriptions', subscribeSchema);
module.exports = subscribeModel;