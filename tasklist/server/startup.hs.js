/**
 * Created by anselmo on 10/07/16.
 */

Meteor.startup(function(){
    Meteor.publish("tarefas", function() {
        return Tarefas.find({ usuario: this.userId });
    });
});