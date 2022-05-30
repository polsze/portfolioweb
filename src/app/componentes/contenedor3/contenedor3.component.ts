import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-contenedor3',
  templateUrl: './contenedor3.component.html',
  styleUrls: ['./contenedor3.component.css']
})
export class Contenedor3Component implements OnInit {
  educationList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data => {
        console.log(data);
        this.educationList=data.education;
  });
  }

}
