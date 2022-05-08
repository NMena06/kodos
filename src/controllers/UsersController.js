
const UserController = {
    login: function (req, res) {
      return  res.render('user/login',{hoja:'userStyles.css'});
    },
    register:function (req, res) {
        return res.render('user/register',{hoja:'userStyles.css'});
    },
    // agrego controlador para formulario de recuperación de contraseña
    recuperacionPass: function (req, res) {
        return res.render("user/recuperacionPass",{hoja:'userStyles.css'})
    }
}

module.exports = UserController