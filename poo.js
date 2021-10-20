//Forma de crear objetos Literales


// const juan = {
//     name: 'JuanDC',
//     username: 'juandc',
//     points: 100,
//     socialMeida: {
//         twitter: "Sphinx500",
//         instagram: "Sphinx500",
//         facebook: undefined,
//     },
//     approvedCourses: [
//         "Curso Practico de HTML y CSS",
//         "Curso Practico de HTML y CSS",
//     ],
//     learningPaths: [
//         {
//             name:"Escuela de Desarrollo Web",
//             courses:[
//                 "Curso Practico de HTML y CSS",
//                 "Curso Practico de HTML y CSS",
//                 "Curso de Responsive Design"
//             ],
//         },
//         {
//             name:"Escuela de Videojuegos",
//             courses:[
//                 "Curso Introduccion a videojuegos",
//                 "Curso de Unreal Engine",
//                 "Curso de Unity 3D"
//             ],
//         },
//     ],
// };


// const miguelito1 = {
//     name: 'Miguelito',
//     username: 'mig45',
//     points: 1000,
//     socialMeida: {
//         twitter: "miguel_01",
//         instagram: "miguel_01",
//         facebook: undefined,
//     },
//     approvedCourses: [
//         "Curso de DataBusiness",
//         "Curso Databiz",
//     ],
//     learningPaths: [
//         {
//             name:"Escuela de Desarrollo Web",
//             courses:[
//                 "Curso Practico de HTML y CSS",
//                 "Curso Practico de HTML y CSS",
//                 "Curso de Responsive Design"
//             ],
//         },
//         {
//             name:"Escuela de Data Science",
//             courses:[
//                 "Curso de DataBusiness",
//                 "Curso Databiz",
//                 "Curso de Tableu",
//             ],
//         },
//     ],
// };


//PROGRAMACION ORIENTADA A OBJETOS

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    };
};




//ABSTRACCIÓN.

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasica = new Course({
    name: "Curso de programacion basica",
},
);

const cursoDefinitivoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
},
);
class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoJS,
        cursoReact,
        cursoNextJS,
        cursoDefinitivoHTML,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoPython,
        CursoMatematicas,
        CursoExcel,
    ],
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        cursoUnity,
        CursoEngine,
        CursoExcel,
        cursoDefinitivoHTML,
    ],
});

class ClassesForCourse{
    constructor({
        name,
        comments = [],
        questions = [],
        resourses = [],
        relatedClasses = [],
        nextClass, 
        pastClass
    })
    {
    this.name = name,
    this.comments = comments,
    this.questions = questions,
    this.resourses = resourses,
    this.relatedClasses = relatedClasses
    this.nextClass = nextClass
    this.pastClass = pastClass
    }
}

const claseQueEsHTML = ({
    name: "¿Que es HTML/CSS/JS"
})

const clasePrimerLineaCodigo = ({
    name: "Mi Primer Linea de Código",
    nextClass: claseQueEsHTML
})


class Course{
    constructor({
        name,
        classes = [],
    }){
        this.name = name;
        this.classes = classes;
    }
} 

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    classes: [
        clasePrimerLineaCodigo,
        claseQueEsHTML
    ], 
})






const juan2 = new Student({
    name: 'Juan',
    username: 'Juandc',
    email: 'juandc@gmail.com',
    twitter: 'juandc',
    learningPaths: [
        escuelaVgs,
        escuelaData,
    ],
});

const miguelito2 = new Student({
    name: 'Miguelito',
    username: 'Migueldc',
    email: 'miguel@gmail.com',
    instagram: 'miguel_dc',
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});