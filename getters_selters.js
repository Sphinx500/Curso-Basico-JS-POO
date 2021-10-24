class Course {
    constructor({
        name,
        classes = [],
    }) {
        //Con guion bajo pedimos que el atributo no sea llamado desde fuera
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


//RETO CON LA CLASE STUDENT Y EL PLATZI RANK
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        approvadesCourses = [],
        learningPaths = [],
        platziRank = 0,
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
        };
        this.approvadesCourses = approvadesCourses;
        this.learningPaths = learningPaths;
        this._platziRank = platziRank;
    }
    get platziRank(){
        return this._platziRank();
    }
    set platziRank (newPlatziRank) {
        if (typeof newPlatziRank === "number"){
            this._platziRank = newPlatziRank;
        } else {
            console.error("No puedes realizar esta cambio");
        }
    }
};