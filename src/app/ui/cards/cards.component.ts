import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  constructor(private api:ApiService){}
  products:any=[]
  ngOnInit()
  {
    this.api.getData().subscribe((data:any)=>{
      this.products= data;
    })
  }

}
