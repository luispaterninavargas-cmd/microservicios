import productModel from "../../database/models/productRepository.js";
class productoController {

    //metodo para crear producto
    async crearProducto(req, res) {

        try {
            const data = await productModel.crearProducto(req.body); // <-- await y nombre correcto
            res.status(201).json(data); // devuelve el documento insertado
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    //metodo para obtener todos los productos
    async getAll(req, res) {

        try {
            const data = await productModel.getAll();
            res.status(201).json(data);
        }   catch (e) {     
            res.status(500).json({ error: e.message });
        }
    }

    //metodo para obtener un producto por su id
    async getOne(req, res) {

        try {
            const {id} = req.params;
            const data = await productModel.getOne(id);
            res.status(201).json(data);
        } catch (e) {       
            res.status(500).json({ error: e.message });
        }   
    }
     
    //metodo para actualizar un producto por su id
    async actualizarProducto(req, res) {
        try {
            const {id} =  req.params;
            const data = await productModel.update(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
    //metodo para eliminar un producto por su id
    async eliminarProducto(req, res) {

        try {
            const {id} =  req.params;
            const data = await productModel.eliminarProducto(id);
            res.status(200).json(data);
        } catch (e) {
            res.status(505).json({ error: e.message });
        }   
    }

}
export default new productoController();
