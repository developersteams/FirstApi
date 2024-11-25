const express = require('express');
const router = express.Router();
const UserControllers = require('../Controllers/UserControllers');


// router.post('/create',(req,res) =>{
//     res.send('Helle this post method');
//     // console.log('this is post method');

// });


router.post('/create',UserControllers.UserCreate);
router.get('/getuser',UserControllers.getUsers);
router.get('/getuser/:_id',UserControllers.getUserByID);
router.delete('/deleteuser/:_id',UserControllers.deleteUserById);
router.put('/update/:_id',UserControllers.updateById);
// router.delete('/delete/:id',UserControllers.deleteUser);
// router.get();
// router.put();
// router.delete();

module.exports = router;