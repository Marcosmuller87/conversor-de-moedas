import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
})
export class ConversorComponent implements OnInit {
  quantidade = 0;
  converterDe = 'BRL';
  converterPara = 'USD';
  total = 0;
  moedas = ['BRL', 'USD', 'EUR', 'GBP'];

  constructor() {}

  ngOnInit(): void {}

  converter() {
    switch (this.converterDe) {
      case 'BRL':
        if (this.converterPara === 'BRL') {
          this.total = this.quantidade;
        }
        if (this.converterPara === 'USD') {
          this.total = this.quantidade * 0.18;
        }
        if (this.converterPara === 'EUR') {
          this.total = this.quantidade * 0.18;
        }
        if (this.converterPara === 'GBP') {
          this.total = this.quantidade * 0.15;
        }
        break;
      case 'USD':
        if (this.converterPara === 'BRL') {
          this.total = this.quantidade * 5.5;
        }
        if (this.converterPara === 'USD') {
          this.total = this.quantidade;
        }
        if (this.converterPara === 'EUR') {
          this.total = this.quantidade;
        }
        if (this.converterPara === 'GBP') {
          this.total = this.quantidade * 0.84;
        }
        break;
      case 'EUR':
        if (this.converterPara === 'BRL') {
          this.total = this.quantidade * 5.5;
        }
        if (this.converterPara === 'USD') {
          this.total = this.quantidade;
        }
        if (this.converterPara === 'EUR') {
          this.total = this.quantidade;
        }
        if (this.converterPara === 'GBP') {
          this.total = this.quantidade * 0.84;
        }
        break;
      case 'GBP':
        if (this.converterPara === 'BRL') {
          this.total = this.quantidade * 6.59;
        }
        if (this.converterPara === 'USD') {
          this.total = this.quantidade * 1.17;
        }
        if (this.converterPara === 'EUR') {
          this.total = this.quantidade * 1.17;
        }
        if (this.converterPara === 'GBP') {
          this.total = this.quantidade;
        }
        break;
    }
  }
}
