const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=> {
    console.log(result);
})

Todo.findOneAndRemove({_id: '5a1e90fdc5adce2854d7c025' }).then((todo)=> {

})

Todo.findByIdAndRemove('5a1e90fdc5adce2854d7c025').then((todo)=> {
    console.log(todo);
})