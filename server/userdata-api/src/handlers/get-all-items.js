// Create clients and set shared const values outside of the handler.

// Get the DynamoDB table name from environment variables
// const tableName = process.env.SAMPLE_TABLE;
const { DYNAMODB_SETTING, DYNAMODB_TABLE_NAME } = require('./../Constant.js');

const tableName = DYNAMODB_TABLE_NAME;

// Create a DocumentClient that represents the query to add an item
const AWS = require('aws-sdk');
AWS.config.update(DYNAMODB_SETTING);
const docClient = new AWS.DynamoDB.DocumentClient();

/**
 * A simple example includes a HTTP get method to get all items from a DynamoDB table.
 */
exports.getAllItemsHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getAllItems only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    let response = {};
		const params = {
			TableName : "User1",
			ProjectionExpression: "#id, #Year",
			ExpressionAttributeNames: {
				"#id": "id",
				"#Year": "Year"
			}
		};

		var items = [];
		docClient.scan(params, (err, data) => {
			if (err) {
				console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
			} else {

				return response = {
					statusCode: 200,
					headers: {
							// "Access-Control-Allow-Headers" : "Content-Type",
							"Access-Control-Allow-Origin": "*", // Allow from anywhere 
							// "Access-Control-Allow-Methods": "GET" // Allow only GET request 
					},
					body: JSON.stringify(data.Items)
				};
			}
		})
			
		return response = {
			statusCode: 200,
			headers: {
					// "Access-Control-Allow-Headers" : "Content-Type",
					"Access-Control-Allow-Origin": "*", // Allow from anywhere 
					// "Access-Control-Allow-Methods": "GET" // Allow only GET request 
			},
			body: JSON.stringify(items)
		};
}
