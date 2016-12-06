Template.formulario.events({
    "submit form": function (e, template){
       //Sempre fazer isso nos eventos
        e.preventDefault();

        var input = $("#tarefa");
        var nome = input.val();
        
        // Tarefas.insert(
        //     {
        //         nome: nome, 
        //         data: new Date()
        //     }
        //  );

        Meteor.call("adiciona", { nome: nome } );
        input.val("");
    }
});