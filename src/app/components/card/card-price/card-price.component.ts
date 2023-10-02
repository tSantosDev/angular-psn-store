import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

	@Input()
	gameType:string = "Digital PS3"
	@Input()
	gamePrice:string = "R$ 359,99"

  constructor() { }

  ngOnInit(): void {
  }

}
