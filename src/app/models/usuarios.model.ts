export class Usuarios {

    constructor(
        public nombre : string,
        public email : string,
        public password? : string,
        public img? : string,
        public google? : string,
        public role? : string,
        public uid? : string
    ){   
    }
    
    imprimirUsuario(){
        console.log(this.nombre)
    }
}