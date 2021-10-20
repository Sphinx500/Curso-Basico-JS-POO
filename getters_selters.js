class Course {
    constructor({
        name,
        classes = [],
    }) {
        //Con gion bajo pedimos que el atributo no sea llamado desde fuera
        this._name = name;
        this.classes = classes;
    }
    get name(){
        return this._name;
    }
    //Metodo que cambia el nombre
    // changeName(nuevoNombre){
    //     this._name = nuevoNombre;
    // }


    // GETTERS Y SETTERS

    //Se pueden usar condicionales para hacer o no la asignacion
    set name(nuevoNombre){
        if(nuevoNombre ==="Curso Malo de Programacion Basica"){
            console.error("Web... no")
        } else{
            this._name = nuevoNombre;
        }
    }

}

const cursoProgBasica = new Course({
    name: "Curso de programacion basica",
},
);

//Para llamar a name
cursoProgBasica.name

//Para llamar al metodo que cambia el nombre
cursoProgBasica.changeName("Otro nombre");

//Para llamar a name desde set
cursoProgBasica.name ="Nuevo nombre"