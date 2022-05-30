import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-contenedor2',
  templateUrl: './contenedor2.component.html',
  styleUrls: ['./contenedor2.component.css']
})
export class Contenedor2Component implements OnInit {
  experienceList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
        console.log(data);
        this.experienceList=data.experience;
  });
  }
}



