var express = require('express');
var router = express.Router();
var ModelHelper = require('../models/modelHelper');

let Users = ModelHelper.getUserModel();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Users.find((err, users)=>{
    res.json(users)
  });
});

router.route('/login')
  .post((req, res) => {
  Users.findOne({
    username: req.body.username,
    password: req.body.password
  }).then((user,err) => {
    if(err){
      res.send(err)
    }else{
      res.send(user)
    }
  });
});

router.route('/add')
  .post((req, res)=>{
    let user = new Users(req.body);
    user.save(err=>{
      if(err){
        res.send(err)
      }else{
        res.send("User Saved")
      }
    });
  });

router.route('/remove')
.delete((req,res)=>{
  console.log('romeovos')
    const query = {'_id': req.body._id}
    Users.findOneAndRemove(
        query,
        req.body,
        (err)=>{
            if (err) {
                return res.status(500);
            }
            return res.send("Successfully Removed");
        }
        )
      });

module.exports = router;
