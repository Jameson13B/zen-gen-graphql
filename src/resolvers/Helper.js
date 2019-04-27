const axios = require('axios');

const getAdvice = () => {
  // Get advice
  return axios
    .get('https://api.adviceslip.com/advice')
    .then(res => {
      return res.data.slip.advice;
    })
    .catch(err => {
      console.log(err);
      return null;
    });
};

module.exports = {
  getAdvice
};
