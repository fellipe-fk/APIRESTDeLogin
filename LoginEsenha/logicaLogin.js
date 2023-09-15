const senhaElogin = {
    usuario:'admin',
    acesso:123
};

function acessoLoginSenha (login,senha){
    let usuario = senhaElogin.usuario;
    let acesso = senhaElogin.acesso;
    let resultado;

    if(login == usuario && senha == acesso){
        resultado = 'Bem-Vindo ao sistema';
    };

    return resultado;
};

function validaAcesso(parametro){

    let usuario = senhaElogin.usuario;
    let acesso = senhaElogin.acesso;

    if(parametro != usuario && parametro != acesso){
        return false;
    }else{
        return true;
    };
};




exports.acessoLoginSenha = acessoLoginSenha;
exports.validaAcesso = validaAcesso;

