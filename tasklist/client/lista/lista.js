/**
 * Created by anselmo on 09/07/16.
 */
Template.lista.helpers({
    tarefas : function(){
        return Tarefas.find({});
    },
    formataData : function(){
        return moment(this.data).format('DD/MM/YYYY HH:mm');
    }
});
