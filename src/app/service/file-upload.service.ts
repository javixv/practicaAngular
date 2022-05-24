import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  urlbase = environment.urlapi
  constructor() { }

  async actulizarfoto( archivo : File,tipo : 'medicos'|'hospitales'|'usuarios',id : string){
    try{
        const url = `${this.urlbase}/upload/${tipo}/${id}`
        const formData = new FormData()
        formData.append('imagen', archivo)

        const resp = await fetch(url, {
          method : 'PUT',
          headers: {
            'x-token' : localStorage.getItem('token') || ''
          },
          body : formData
        })

        //console.log(resp)
        const data = await resp.json();
        if(data.ok){
          return data.nombreArchivo
        }else{
          return false;
        }
        
    }catch(error){
        console.log(error)
        return false
    }


  }
  
}
