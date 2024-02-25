const quizModel = require('../Models/quizModel')
const userModel = require('../Models/userModel')


const giveScore = async (req, res) => {
    try{
        const answers = req.body.answers
        const userDetails = req.body.userDetails


        if (!userDetails || !userDetails.username || !userDetails.roll) {
            return res.status(400).json({ message: 'User details are missing or invalid' });
        }


        const questions = await quizModel.find()
       
        let score = 0
        questions.forEach((question, index) => {
            if(question.answer === answers[index]){
                score++
            }
        })


        const newUser = new userModel({
            username: userDetails.username,
            roll: userDetails.roll,
            score: score
        })


        await newUser.save()


        res.json({
            username: newUser.username,
            roll: newUser.roll,
            score: newUser.score
        });
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Can\'t calculate scores'
        })
    }


}


module.exports = giveScore