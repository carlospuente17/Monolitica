let task=[]

let idCounter=0;

module.exports = {
    getAll: () => task,
    add: (descripcion, fechaLimite, prioridad)=> {
        const newTask = {
            id: ++idCounter,
            descripcion,
            fechaLimite,
            prioridad,

        }
        task.push(newTask);
    },
    delete: (id)=> {
        task= task.filter (t => t.id !== parseInt(id));
    }
}