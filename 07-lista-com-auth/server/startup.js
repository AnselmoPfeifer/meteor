Meteor.startup(function(){
    Meteor.publish("Tarefas", function() {
        return Tarefas.find({ });
    });
});