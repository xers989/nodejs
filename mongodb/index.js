const mongoose = require('mongoose');

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.connect('mongodb://xers9:*****@localhost:27017/admin' {
    dbName: 'nodejs',
    useNewUrlParser: true,
    useCreateIndex: true,
  }, (error) => {
    if(error) {
      console.log('Connection error', error);
    } else {
      console.log('Success connection');
    }
  });
};
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error', error);
});
mongoose.connection.on('disconnected', () => {
  console.error('MongoDB connection is lost, try to reconnect');
  connect();
});

module.exports = connect;
