import salesModel from "../../../models/salesRepository.js";

class salesController {
    constructor() {
}

async create(req, res){
    try{
        const data = await salesModel.create(req.body);
        res.status(201).json(data);
    }catch(e){
        res.status(500).send(e); 
    }
}

async update(req, res){
    try{
        const {id} = req.params;
        const data = await salesModel.update(id, req.body);
        res.status(200).json(data);
    }catch(e){
        res.status(500).send(e); 
    }
}

async delete(req, res){
     try{
        const {id} = req.params;
        const data = await salesModel.delete(id);
        res.status(206).json(data);
    }catch(e){
        res.status(500).send(e); 
    }
}

async getAll(req, res){
    try{
        const data = await salesModel.getAll();
        res.status(201).json(data);
    }catch(e){
        res.status(500).send(e); 
    }
}

async getOnline (req, res){
    try{
        const {id} = req.params;
        const data = await salesModel.getOnline(id);
        res.status(201).json(data);
    }catch(e){
        res.status(500).send(e); 
    }
}
}

export default new salesController();