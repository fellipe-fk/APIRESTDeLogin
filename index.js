const express = require('express');
const app = express();

const retornaAcesso = require('./LoginEsenha/logicaLogin');

app.get('/', (req, res) => {
    let login = req.query.login;
    let senha = req.query.senha;

    if(retornaAcesso.validaAcesso(req.query.login) && retornaAcesso.validaAcesso(req.query.senha)){
        let loginSenha = retornaAcesso.acessoLoginSenha(login,senha);
        let jsonLoginSenha = {acesso:loginSenha};
    
        res.json(jsonLoginSenha);
    }else{
        res.status(400).json({'Erro': 'usuario ou senha invalido'});
    };
});

app.listen(8080, () => {
    console.log('Programa iniciado..');
});