import 'dotenv/config';
import {MongoClient} from "mongodb";

class dbClient {
    constructor(){
        const queryString = "mongodb+srv://mauriciohramirez46_db_user:CJyAR6H5UYgzKT2w@e-commerce.netb309.mongodb.net/?appName=E-COMMERCE";
        this.client = new MongoClient(queryString);
        this.conectBD();
    }

    async conectBD(){
        try{
                await this.client.connect();
                this.db = this.client.db('E-COMMERCE');
                console.log("Connected to Sales DB");   
            } catch (e){
            console.log(e);
        }
}

}

export default new dbClient();
