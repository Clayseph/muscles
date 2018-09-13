var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const MongoClient = require('mongoose')
var Schema = mongoose.Schema;

let workoutSchema = new Schema(
    {
        name: String,
        reps: Number,
        sets: Number,
        weight: Number
    }
);
let Workouts = mongoose.model('Workouts', workoutSchema);

router.get('/', (req,res,next)=>{
    Workouts.find((err,workouts)=>{
        res.json(workouts);
    });
});

router.route('/add')
    .post((req,res)=>{
        let workout = new Workouts(req.body);
        workout.save((err)=>{
            if(err){
                res.send(err)
            } else{
                res.send('Workout Saved');
            }
        })
    })
    module.exports = router;