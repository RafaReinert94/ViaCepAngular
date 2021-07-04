import { DbFirestoreService } from './../db/db-firestore.service';
import { Cep } from './../model/cep.interface';
import { ViacepService } from './../ViaCEP/viacep.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import { Cliente } from '../model/cliente.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  //varialvel do Cep
  cep:Cep = {
    bairro:'',
    cep:'',
    complemento:'',
    ddd:'',
    gia:'',
    ibge:'',
    localidade:'',
    logradouro:'',
    siafi:'',
    uf:'',
  };

  //criando variavel que vai ser usada com ngModel para salvar no db
  cliente:Cliente = {
    nome:'',
     bairro:'',
     cep:'',
     complemento:'',
     localidade:'',
     logradouro:'',
     uf:'',
     numero:''
  }


  constructor(private fb: FormBuilder, private viacep: ViacepService, private db: DbFirestoreService) { }

  ngOnInit(): void {
  }


  //metodo para buscar o Cep
  async buscarCep(cep){
    this.cep = await this.viacep.buscarCep(cep.target.value);
    this.cliente = {
      cep: this.cep.cep,
      bairro: this.cep.bairro,
      complemento: this.cep.complemento,
      localidade: this.cep.localidade,
      logradouro: this.cep.logradouro,
      uf: this.cep.uf,
      nome: this.cliente.nome,
      numero: this.cliente.numero,
    }
  }


  //metodo para salvar o cliente no banco de dados
   onSubmit(){
    console.log(this.cliente)
    this.db.salvarClienteAngularFirestore(this.cliente);
    this.cliente = {
      nome:'',
       bairro:'',
       cep:'',
       complemento:'',
       localidade:'',
       logradouro:'',
       uf:'',
       numero:''
    }
  }

}
