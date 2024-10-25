import { Component } from '@angular/core';
import { CardsComponent } from "../../ui/cards/cards.component";
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(public api: ApiService,private route: ActivatedRoute) { }
  item: any;

  ngOnInit() {
    
    const id = this.route.snapshot.paramMap.get('id');



    this.api.getDataById(id).subscribe((data) => {
      this.item = data;
      console.log(this.item);
      
      
    })
  }

}

