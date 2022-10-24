// Create clients and set shared const values outside of the handler.

// Get the DynamoDB table name from environment variables
// const tableName = process.env.SAMPLE_TABLE;
const { DYNAMODB_SETTING, DYNAMODB_TABLE_NAME } = require('./../Constant.js');
// import { DYNAMODB_SETTING, DYNAMODB_TABLE_NAME } from './../Constant.js';

// const tableName = DYNAMODB_TABLE_NAME;
const tableName = 'UserTable';

// Create a DocumentClient that represents the query to add an item
const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: 'a',
  secretAccessKey: 'a',
  region: 'local',
  // endpoint: 'http://172.24.222.138:8000',
  endpoint: 'http://207.246.102.71:8000'
});
const docClient = new AWS.DynamoDB.DocumentClient()

/**
 * A simple example includes a HTTP get method to get one item by id from a DynamoDB table.
 */
exports.getByIdHandler = async (event) => {

  if (event.httpMethod !== 'GET') {
    throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`);
  }

  // Get id from pathParameters from APIGateway because of `/{id}` at template.yaml
  const id = event.pathParameters.id;
  const params = {
    TableName: tableName,
    Key: {
      "id": id
    }
  };

  var resData = await docClient.get(params).promise(); //here error

  // TODO: Replace this temporary code. This should retrieve from database.
  return {
    statusCode: 200,
    body: JSON.stringify(resData),
    headers: {
    // "Access-Control-Allow-Headers" : "Content-Type",
    "Access-Control-Allow-Origin": "*", // Allow from anywhere
    // "Access-Control-Allow-Methods": "GET" // Allow only GET request
    },
   };
}
