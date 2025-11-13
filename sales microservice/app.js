import 'dotenv/config';
import express from 'express';
import routesSales from './infrastructure/web/routes/sales.js';
import bodyParser from 'body-parser';

const app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/sales', routesSales);

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log("Server running on port " + PORT));
}catch(e){
    console.log(e);
}