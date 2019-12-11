const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
var express = require('express');
var router = express.Router();
const controller = require('../controller/controller.js');


// router.post('/api/auth/signup',[verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], function(req, res){
//     controller.signup(req, res);
//     console.log()
//   });
 

  router.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);
  
  router.post('/api/auth/signin', controller.signin);
  
  router.get('/api/test/user', [authJwt.verifyToken, authJwt.isPm], controller.userContent);
  
  router.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);
  
  router.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
module.exports = router;



