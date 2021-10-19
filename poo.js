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
        cursoJS,
        cursoReact,
        cursoNextJS,
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


const juan2 = new Student({
    name: 'Juan',
    username: 'Juandc',
    email: 'juandc@gmail.com',
    twitter: 'juandc'
});

const miguelito2 = new Student({
    name: 'Miguelito',
    username: 'Migueldc',
    email: 'miguel@gmail.com',
    instagram: 'miguel_dc'
});