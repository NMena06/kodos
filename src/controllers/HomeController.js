

const HomeController = {
    home: function (req, res) {
       return res.render("home",{title:'Libreria Kodos',hoja:'home.css'});
    }
}



module.exports = HomeController