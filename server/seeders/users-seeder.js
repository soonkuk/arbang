var mongoose = require('mongoose');
var User = require('../models/User.model');

require('dotenv').config()
mongoose.connect(process.env.MONGO_CONNECTION_STR);

User.collection.drop();

/*
user[0] 
    Secret Seed: SCXSRKNDS7FG3L25OJHZ3MNAGKEOQ62JYYBXONMNL6CSUJVGBS7DTOBT
    Public Address: GBODIJAAI66DDKXLHGP6Z6ZC3M7K6LUIP6NK2CA34WOYYUHVSGS7E5AU
user[1]
    Secret Seed: SBEWY33LCGTVOARJQQPEXZITBV6HPNKI5D5N4GFWZIC62ULCV3S7EXDH
    Public Address: GB3CVLBKTBVDCZBKJ37LNFRUS726KN7U2QOOIYVVYGZG5XVES6VV4XVY
user[2]
    Secret Seed: SA6J3TJ7JXHNENGWJ4HFQPFM3BQDJZALFWGIHCBHWAX7RFGDHVLCYKIV
    Public Address: GB3YFG6SJVKWFM5TIZJJOMHJEDFM5GILSGLYV4LX43LXKWOAKQNCBKV3
*/

var users = [
  new User({
    uid: 'dr.frank@gmaile.com',
    password: 'dr.frank',
    bos_account: 'GBODIJAAI66DDKXLHGP6Z6ZC3M7K6LUIP6NK2CA34WOYYUHVSGS7E5AU'
  }),
  new User({
    uid: 'zombie@gmaile.com',
    password: 'zombie',
    bos_account: 'GB3CVLBKTBVDCZBKJ37LNFRUS726KN7U2QOOIYVVYGZG5XVES6VV4XVY'
   }),
  new User({
    uid: 'hello@gmaile.com',
    password: 'hello',
    bos_account: 'GB3YFG6SJVKWFM5TIZJJOMHJEDFM5GILSGLYV4LX43LXKWOAKQNCBKV3'
  })
];

var count = 0;
users.forEach((elem) => {
  elem.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      count++;
      if (count == users.length) quit();
    }
  });
});

function quit() {
  console.log('Added ',users.length,' user seeds');
  mongoose.disconnect();
}
