# 04 Lista mongodb com formulario

    - meteor update
    - meteor update --all-packages
    - meteor update --packages-only
    - meteor npm install
    - meteor run

# adicionar tarefas no banco:
    - db.Tarefas.insert({nome:"Estaudando Spring"});

    - meteor add mrt:bootstrap-3 // usado para melharar interface grafica com BootsTrap
    - meteor add momentjs:moment // usado para formatar a data
    - meteor remove autopublish // remover o auto publisher


# Adicionando pacotes para autenticação com facebook e GitHub
    - meteor add accounts-base
    - meteor add acconts-password
    - meteor add ian:accounts-ui-bootstrap-3
    - meteor npm install --save bcrypt
    - meteor npm install --save babel-runtime
    - meteor add accounts-facebook
    - meteor add accounts-github
    - meteor add accounts-google