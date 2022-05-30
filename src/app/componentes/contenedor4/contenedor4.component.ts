import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-contenedor4',
  templateUrl: './contenedor4.component.html',
  styleUrls: ['./contenedor4.component.css']
})
export class Contenedor4Component implements OnInit {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
     this.datosPortfolio.obtenerDatos().subscribe(data => {
        console.log(data);
        this.miPortfolio=data;
      });
  }

}
