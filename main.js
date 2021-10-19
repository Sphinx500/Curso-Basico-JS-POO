const natalia = {
    name: 'natalia',
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    //Crear un metodo para aprobar cursos
    aprobarCurso(nuevoCursito) {
        //this hace referencia al mismo objeto
        this.cursosAprobados.push(nuevoCursito);
    }
};

// Hacer que natalia apruebe otro curso
// natalia.cursosAprobados.push("Curso de Responsive Design");


//CREANDO EL PRIMER PROTOTIPO.

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    //Esta es una forma de trabajar

    // this.aprobarCurso = function(nuevoCursito){
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}

//Creando el prototipo
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

//Creando la instancia

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Introducción a los Videojuegos",
        "Creacion de personajes",
    ],
);