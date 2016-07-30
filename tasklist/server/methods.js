/**
 * Created by anselmo on 10/07/16.
 */
Meteor.methods({
    adiciona : function(obj){
        Tarefas.insert({nome: obj.nome, data: new Date(),
        usuario: this.userId })
    },

    remove : function(id){
        Tarefas.remove({ _id: id, usuario: this.userId })
    }
});