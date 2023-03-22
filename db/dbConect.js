
const mongoose=require('mongoose');

exports.dbConnection = async () => {
    mongoose.set('strictQuery', true)
  await mongoose.connect('mongodb+srv://raja:lifeis@cluster0.edzsdqq.mongodb.net/?retryWrites=true&w=majority ')
    .then(() => {
     console.log('Db Connected')
    }).catch((err) => {
     console.log(err)
     })
}
