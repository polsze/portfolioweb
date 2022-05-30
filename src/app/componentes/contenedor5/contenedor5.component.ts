import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-contenedor5',
  templateUrl: './contenedor5.component.html',
  styleUrls: ['./contenedor5.component.css']
})
export class Contenedor5Component implements OnInit {
    skillsList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
         this.datosPortfolio.obtenerDatos().subscribe(data => {
        console.log(data);
        this.skillsList=data.skills;
  });
  }

}
