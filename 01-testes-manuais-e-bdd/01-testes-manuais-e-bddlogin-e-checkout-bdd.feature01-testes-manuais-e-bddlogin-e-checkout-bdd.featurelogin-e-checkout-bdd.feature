# language: pt
Funcionalidade: Autenticação de Usuários no E-commerce

  Cenário: Tentativa de login com conta de usuário bloqueada
    Dado que o usuário está na tela de autenticação do SauceDemo
    Quando preenche o campo usuário com "locked_out_user"
    E preenche o campo senha com "secret_sauce"
    E clica no botão "Login"
    Então o sistema deve recusar a autenticação
    E deve permanecer na página de login
    E deve exibir a mensagem de erro "Epic sadface: Sorry, this user has been locked out."
