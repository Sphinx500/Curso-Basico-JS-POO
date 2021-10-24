//HERENCIA

//Para usar la herencia se utiliza la palabra extends

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
    }
  }
  
  class FreeStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      if (newCourse.isFree) {
        this.approvedCourses.push(newCourse);
      } else {
        console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
      }
    }
  }
  
  class BasicStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      if (newCourse.lang !== "english") {
        this.approvedCourses.push(newCourse);
      } else {
        console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
      }
    }
  }
  
  class ExpertStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      this.approvedCourses.push(newCourse);
    }
  }
  
  
  
  const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });