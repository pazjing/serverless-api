'use strict';

module.exports.trial = async event => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        variable1: 'The value of 1st variable is: ' + process.env.GOOGLE_MAPS_API_KEY,
        variable2: 'The value of 1st variable is: ' + process.env.OTHER_API_KEY
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
