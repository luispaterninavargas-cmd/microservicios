import { ObjectId } from "mongodb";
import dbClient from "../../config/dbClient.js";
class productModel {

    async crearProducto(productos) {
        const colProductos = dbClient.db.collection('productos');
        return await colProductos.insertOne(productos);
    }     

    async getAll() {
        const colProductos = dbClient.db.collection('productos');
        return await colProductos.find({}).toArray();
    }   

    async getOne(id) {
        const colProductos = dbClient.db.collection('productos');
        return await colProductos.findOne({ _id: new ObjectId(id) });
        
    }

    async update(id, datosActualizados) {
        const colProductos = dbClient.db.collection('productos');
        return await colProductos.findOneAndUpdate({_id: new ObjectId(id)}, { $set: datosActualizados });
    }

    async eliminarProducto(id) {
        const colProductos = dbClient.db.collection('productos');
        return await colProductos.findOneAndDelete({ _id: new ObjectId(id) });  
    }
    
}

export default new productModel();
