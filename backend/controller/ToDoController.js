const ToDoModel = require ('../models/ToDoModel')

const getToDo = async (req , res)=>{
    try {
        const toDo = await ToDoModel.find()
        res.send(toDo)


    } catch (error) {
        
    }
}

const saveToDo = async (req , res)=>{
    try {
        
    } catch (error) {
        
    }
}
module.exports = {
    getToDo ,
    saveToDo

}