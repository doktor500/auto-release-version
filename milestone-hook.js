const lambdaExpress = require('lambda-express'),
      express       = require("express"),
      http          = require("http"),
      bodyParser    = require('body-parser'),
      app           = express(),
      server        = http.createServer(app),
      port          = 8080;

const checkMilestone = (request, response) => {
  console.log(JSON.stringify(request.body));
  response.sendStatus(200);
};

app.use(bodyParser.json());
app.post('/check-milestone', checkMilestone);

server.listen(port, () => console.log(`Node server running on port: ${port}`));

exports.handler = lambdaExpress.appHandler(app);
