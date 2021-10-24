//Export permite indicar cuales son las partes que podemos acceder desde cualquier script


//Módulos de ECMAScript 6

//Va a recibir el ID de los videos
function videoPlay(id){
    const urlSecreta = "https://platzisecreto.com/" + id;
    console.log("Se esta preproduciendo desde la url" + urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://platzisecreto.com/" + id;
    console.log("Pausamos la url" + urlSecreta);
}







export class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        videoID = videoID;
    }

    //Metodos
    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }
}

