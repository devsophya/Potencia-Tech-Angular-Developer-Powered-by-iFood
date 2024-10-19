import { Component, Input, OnInit ,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string = ''

  constructor() {
    console.log(`Construtor ${this.nome}`)
   }

  ngOnChanges(): void {
    console.log(`OnChanges ${this.nome}`)
  }

  ngOnInit(): void {
    this.nome = this.nome + "x"
    console.log(`OnInit ${this.nome}`)
  }


}
