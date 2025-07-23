const task = require("../models/task");


exports.index=(req,res)=> {
    const tasks = task.getAll()

    res.render ("index", {tasks});
}

exports.addTask = (req, res) =>{
    console.log(req.body)
    const { descripcion, fechaLimite, prioridad}= req.body
    if (descripcion && fechaLimite && prioridad){
        task.add(descripcion, fechaLimite, prioridad);
    }
    res.redirect("/");
}

exports.deletetask = (req, res)=> {
    task.delete(req.params.id);
    res.redirect('/');
}