var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
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
    });

router.route('/update')
    .put((req,res)=>{
        const query = {'_id': req.body._id}
        console.log(req.body)
        Workouts.findOneAndUpdate(
            query,
            req.body,
            {new:true},
            (err, workout)=>{
                if (err) {
                    return res.status(500);
                }
                return res.send(workout);
            }
            )
    });

router.route('/remove')
.delete((req,res)=>{
    const query = {'_id': req.body._id}
    Workouts.findOneAndRemove(
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