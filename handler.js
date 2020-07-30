'use strict';

module.exports.hello = async event => {

  if(event.queryStringParameters && event.queryStringParameters.name) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hello ' + event.queryStringParameters.name + ', nice to meet you!'
        },
        null,
        2
      ),
    }; 
  }

  if(event.httpMethod === "POST" && event.body) {
    let jsonbody = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hi, I have got your JSON object!',
          object: jsonbody
        },
        null,
        2
      ),
    }; 
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
