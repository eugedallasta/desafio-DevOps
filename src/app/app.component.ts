import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devOps';

  total:number=0;
  personas:number=0;
  propina:number=0;
  impuestos:number=0;

  totalPropina:number=0;
  totalImpuestos:number=0;

  aPagar:number=0;

  calcularPropina(){
    this.totalPropina = (this.total*this.propina)/100;
    return this.totalPropina;
  }

  calcularImpuestos(){
    this.totalImpuestos = (this.total*this.impuestos)/100;
    return this.totalImpuestos;
  }

  calcular(){
    this.aPagar = this.total + this.totalImpuestos + this.totalPropina;
    return this.aPagar;

  }

}
