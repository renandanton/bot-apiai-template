import http  from 'http';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

var  app = express();
var server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views',__dirname + '/public');
app.set('view options', { layout:false, root: __dirname + '/public' } );

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", () => {
  var addr = server.address();
  console.log("Chat Bot server listening at", addr.address + ":" + addr.port);
});