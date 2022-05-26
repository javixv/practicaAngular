import { environment } from "src/environments/environment"

const urlapi = environment.urlapi

export class Usuarios {

    constructor(
        public nombre : string,
        public email : string,
        public password? : string,
        public img? : string,
        public google? : string,
        public rol? : string,
        public uid? : string
    ){   
    }
    
    get imagenUrl(){
        if(this.img){
            return `${urlapi}/upload/usuarios/${this.img}`
        }else{
            return `${urlapi}/upload/usuarios/no-img`
        }
    }
}