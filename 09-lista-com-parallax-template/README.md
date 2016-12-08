# 04 Lista mongodb com formulario
    - meteor update
    - meteor update --all-packages
    - meteor update --packages-only
    - meteor npm install
    - meteor run

    * Adicionar tarefas no banco:
    - db.Tarefas.insert({nome:"Estaudando Spring"});

    Removendo BootsTrap e Materialize
    - meteor remove mrt:bootstrap-3
    - meteor remove materialize:materialize
    - meteor remove ian:accounts-ui-bootstrap-3
    - meteor remove fourseven:scss
    - meteor remove poetic:materialize-scss
    - meteor remove accounts-github

    - Add @import "{poetic:materialize-scss}/sass/materialize.scss"; > main.css


    * Adicionando pacotes para autenticação com facebook e GitHub
    - meteor add accounts-base
    - meteor add accounts-password
    - meteor add accounts-ui
    - meteor add accounts-facebook
    - meteor npm install --save bcrypt
    - meteor npm install --save babel-runtime
    - meteor npm install --save jquery hammerjs