let users = []; //objeto onde serão armazenados todos os usuários cadastrados.

//classe com o nome de "controlador de usuários", onde há o cadastro e login do usuário;
module.exports = class user_controller{
    //"register_user" significa "registrar usuário"
    static async register_user(req,res){
        const {email, senha, nome_usuario} = req.body;
        if (!email || !senha || !nome_usuario) {
            
        }
    }
}