const Advice = require('../models/advice');

exports.submitQuestion = async (req, res) => {
  const { userId, question } = req.body;

  // Make a call to the OpenAI API to generate an answer.
  // const generatedAnswer = await callOpenAI(question);
  const generatedAnswer = "This is a sample answer";  // Replace with OpenAI API call result

  const advice = new Advice({
    userId,
    question,
    answer: generatedAnswer
  });

  await advice.save();
  res.send(advice);
};

exports.getHistory = async (req, res) => {
  const { userId } = req.body;
  const adviceHistory = await Advice.find({ userId });
  res.send(adviceHistory);
};
