import { Cliente } from './../model/cliente.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DbFirestoreService {

  constructor(private afs: AngularFirestore) { }

  //metodo para salvar o cliente no Firestore
  salvarClienteAngularFirestore(cliente: Cliente){
    cliente.uid = this.afs.createId();
    this.afs.collection('cliente').doc(cliente.uid).set(cliente).then(()=>{alert('Cliente salvo com sucesso.')})
  }

  //metodo para pegar os clientes no Firestore
  getCliente(): Promise<Cliente[]>{
    return new Promise((resolve)=>{
      return this.afs.collection('cliente').valueChanges().subscribe((resp)=>{
        let cliente: Cliente[] = resp;
        return resolve(cliente);
      })
    })
  }


}
