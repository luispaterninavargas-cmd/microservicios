import { ObjectId } from "mongodb";
import dbCLient from "../config/dbSales.js";



class salesModel {
    async create(sales){
        const salesCol = dbCLient.db.collection('SALES');
        return await salesCol.insertOne(sales);
    }

    async update(id, sales){
        const salesCol = dbCLient.db.collection('SALES');
            if ('_id' in sales) {
            delete sales._id;  
    }
        return await salesCol.updateOne({_id: new ObjectId(id)}, {$set: sales});
    }

    async delete(id) {
        const salesCol = dbCLient.db.collection('SALES');
        return await salesCol.deleteOne({_id: new ObjectId(id)});
    }   


    async getAll(){
        const salesCol = dbCLient.db.collection('SALES');
        return await salesCol.find({}).toArray();
    }

    async getOneline(id){
        const salesCol = dbCLient.db.collection('SALES');
        if (!ObjectId.isValid(id)) {
       
        return null; 
    }
        return await salesCol.findOne({_id: new ObjectId(id)});
    }
}

export default new salesModel();