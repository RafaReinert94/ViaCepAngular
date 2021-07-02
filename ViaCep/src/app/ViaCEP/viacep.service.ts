
import { HttpClient } from '@angular/common/http';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Injectable } from '@angular/core';
import { Cep } from '../model/cep.interface';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

constructor(private http: HttpClient) { }

buscarCep(cep:string): Promise<Cep>{
  return new Promise((resolve)=>{
    this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`).subscribe((resp)=>{
      let cep = resp;
      console.log(resp);
      return resolve(cep);
  })
  })
}

}
