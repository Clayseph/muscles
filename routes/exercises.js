var express = require('express');
var router = express.Router();
var ModelHelper = require('../models/modelHelper');

let Exercises = ModelHelper.getExerciseModel();

router.get('/', (req,res,next)=>{
    Exercises.find((err,exercises)=>{
        res.json(exercises);
    });
});

router.route('/user')
    .post((req,res)=>{
        Exercises.find({userId: req.body.userId},(err,exercises)=>{
            res.json(exercises);
        })
    })

router.route('/workout')
    .post((req,res)=>{
        Exercises.find({workoutId: req.body.workoutId},(err,exercises)=>{
            res.json(exercises);
        })
    })

router.route('/add')
    .post((req,res)=>{
        let exercise = new Exercises(req.body);
        exercise.save((err)=>{
            if(err){
                res.send(err)
            }else{
                res.send('Exercise Saved')
            }
        })
    }); 

router.route('/remove')
    .delete((req,res)=>{
        const query = {'_id': req.body._id}
        Exercises.findOneAndRemove(
            query,
            req.body,
            (err)=>{
                if (err) {
                    return res.status(500);
                }
                return res.send("Successfully Removed");
            })
});
module.exports = router;