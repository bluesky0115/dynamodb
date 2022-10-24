// Create clients and set shared const values outside of the handler.

// Create a DocumentClient that represents the query to add an item

const { DYNAMODB_SETTING, DYNAMODB_TABLE_NAME } = require('./../Constant.js');

const tableName = DYNAMODB_TABLE_NAME;

const AWS = require("aws-sdk");
AWS.config.update(DYNAMODB_SETTING);
const docClient = new AWS.DynamoDB.DocumentClient()

/**
 * A simple example includes a HTTP post method to add one item to a DynamoDB table.
 */
exports.putItemHandler = async (event) => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }

    const body = JSON.parse(event.body);  
    let response = {};

    const params = {
      TableName : tableName,
      Item: {
        'id': body.id,
        'email': body.email,
        'passowrd': body.password,
        'savedSearch': body.savedSearch,
        'savedHome': body.savedHome,
        'profileImg': body.profileImg
      }
    };
    
    const	result = await docClient.put(params).promise(); // create

    response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Allow from anywhere
        },
        body: JSON.stringify(body)
    }
    // All log statements are written to CloudWatch
    // console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
};
