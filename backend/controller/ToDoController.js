const ToDoModel = require ('../models/ToDoModel')

const getToDo = async (req , res)=>{
    try {
        const toDo = await ToDoModel.find()
        res.send('toDo')


    } catch (error) {
        
    }
}

const saveToDo = async (req , res)=>{
    try {
        const {text} = req.body 

        ToDoModel.create({text})
        .then((data)=>{
            res.send(data)
        })

    } catch (error) {
        
    }
}

const updateToDo = async (req , res)=>{
    try {
        
        const {id,text} = req.body
       const result = await ToDoModel.findByIdAndUpdate(id , {text})
      
    } catch (error) {
        
    }
}
const deleteTodo = async (req , res)=>{
    try {
        
        const {id,text} = req.body
        const result = await ToDoModel.findByIdAndUpdate(id , {text})
        
    } catch (error) {
        
    }
}
module.exports = {
    getToDo ,
    saveToDo ,
    updateToDo,
    deleteTodo

}