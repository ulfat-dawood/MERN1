const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ksajalk1:ejd75p@cluster0-ghzvf.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },(err)=>{
    if(err) console.log('help', err)
    else console.log('DB Connected')
  })

  module.exports.canvas = require('./canvas')
