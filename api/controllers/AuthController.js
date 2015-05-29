/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcrypt');

module.exports = {
	login: function(req,res){
    // res.send('login route')
    User.findOne({email:req.body.email}).then(function(user){
      // res.send(user);
      if(user){
        // res.send(user);
        bcrypt.compare(req.body.password,user.password,function(err,result){
          if(err) return res.send({result:false,error:err});
          if(result){
            req.session.user = user;
            res.send({
              result: true,
              user: user
            })
          }else{
            res.send({
              result:false,
              error:'invalid password'})
          }
        })
      }else{
        res.send({
          result: false,
          error: 'Unkown user'
        })
      }
    })
  },
  check: function(req,res){
    // res.send('check route')
    res.send({user: req.session.user || false});

  },
  logout: function(req,res){
    // this.currentUser = false;
    // res.send('logout route')
    delete req.session.user;
    res.send({result: true});

  }
};

