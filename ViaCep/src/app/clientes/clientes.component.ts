import { DbFirestoreService } from './../db/db-firestore.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Cliente } from '../model/cliente.interface';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientesComponent implements OnInit {


  //variaveis da tabela expansivel
  columnsToDisplay = ['nome', 'localidade', 'uf'];
  columnsDisplay = ['Nome', 'Cidade', 'Estado',''];
  expandedElement: Cliente | null;
  dataSource;
  data;


  constructor(private router: Router, private db: DbFirestoreService) { }

  async ngOnInit() {
    this.dataSource = await this.db.getCliente();
    this.data = new MatTableDataSource(this.dataSource)
  }

  //botao para adicionar novo cliente
  addCliente(){
    this.router.navigate(['add'])
  }


  //filtro da tabela
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }





}
