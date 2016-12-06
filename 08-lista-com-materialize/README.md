# 04 Lista mongodb com formulario
- meteor update
- meteor update --all-packages
- meteor update --packages-only
- meteor npm install
- meteor run

Adicionar tarefas no banco:
- db.Tarefas.insert({nome:"Estaudando Spring"});

Removendo BootsTrap e adicionando Materialize
- meteor remove mrt:bootstrap-3
- meteor remove materialize:materialize
- meteor add fourseven:scss
- meteor add poetic:materialize-scss
- Add @import "{poetic:materialize-scss}/sass/materialize.scss"; > main.css


Adicionando pacotes para autenticação com facebook e GitHub
- meteor add accounts-base
- meteor add acconts-password
- meteor add ian:accounts-ui-bootstrap-3
- meteor npm install --save bcrypt
- meteor npm install --save babel-runtime
- meteor add accounts-facebook
- meteor add accounts-github
- meteor add accounts-google