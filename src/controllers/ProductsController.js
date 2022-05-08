const ProductController = {
    createProduct: function (req, res) {
       return res.render("products/createProduct",{hoja:'productStyles.css'});
    },

    saveProduct: function(req,res){
   
        let producto = {
            titulo: req.body.titulo,
            autor : req.body.autor,
            categoria: req.body.categoria,
            editorial: req.body.editorial,
            isbn: req.body.isbn,
            precio: req.body.precio,
            fecha: req.body.fecha,
            cantidad: req.body.cantidad,
            paginas: req.body.paginas,
            foto: req.body.fotoPortada,
            descripcion: req.body.descripcion
        }
    
    return res.render('products/saveProduct',{producto:producto,hoja:'productStyles.css'});
       
    },

    editProduct: function(req,res){
            let productID= req.params.id;

            let books = [
                {
                titulo: "El Tunel",
                autor: "Enesto Sabato",
                categoria: "Novela",
                editorial: "CATEDRA",
                isbn: 9789877670264,
                precio: 2500,
                fecha: 18/10/2018,
                cantidad: 20,
                paginas: 200,
                foto: "eltunel.jpg",
                descripcion: "Desde su celda, el pintor Juan Pablo Castel cuenta el recorrido de pensamientos que lo llevó a asesinar a María Iribarne, la única mujer que -según él- comprendió sus obras. Es un viaje al interior de una mente perversa, que se relaciona desde la manipulación, creyendo que posee a una persona al punto de decidir cuándo será el último latido de su vida"
            },
            {
                titulo: "Don Quijote",
                autor: "..",
                categoria: "Novela",
                editorial: "CATEDRA",
                isbn: 9789877670264,
                precio: 2500,
                fecha: 18/10/2018,
                cantidad:5,
                paginas: 1000,
                foto: "donquijote.jpg",
                descripcion: "Lorem ipsum dolor sit amet, consectetur adip..."
            }
        
        ]
                const libroEditar = books[productID];
            res.render("products/editProduct",{hoja:'productStyles.css',libroEditar:libroEditar});
    }
}

module.exports = ProductController;