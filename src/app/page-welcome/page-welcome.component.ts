import { Component, OnInit } from '@angular/core';

import listadoProveedor from 'src/assets/json/proveedores.json';

@Component({
  selector: 'app-page-welcome',
  templateUrl: './page-welcome.component.html',
  styleUrls: ['./page-welcome.component.css']
})
export class PageWelcomeComponent implements OnInit {

  Proveedor: any  = listadoProveedor;

  constructor() { }

  ngOnInit(): void {
  }

}
