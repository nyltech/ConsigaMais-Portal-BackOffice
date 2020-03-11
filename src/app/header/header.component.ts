import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  idPerfil: number;

  ngOnInit() {
    this.idPerfil = Number(localStorage.getItem('idPerfil'));
  }

}
