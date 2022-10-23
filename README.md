### Collection creation

To run Client command:

```shell script 
npm install
npm start

Notice!
To install on windows, I set client/package.json: "start": "react-scripts start",
but on Ubuntu, client/package.json: "start": "WATCHPACK_POLLING=true react-scripts start",
```

To build SAM environment.

1. java -D"java.library.path=./DynamoDBLocal_lib" -jar DynamoDBLocal.jar
2. sam local start-api -p 3001
3. aws dynamodb create-table --cli-input-json file://table.json --endpoint-url http://localhost:8000

Then you can Log in, Sign Up, Save...

This will prompt you the steps needed for creating the collection

## API Reference

We document our API using swagger. Access `http://localhost:3003/docs` after the server starts to explore the available endpoints.
