import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  listOfString:string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah']
}
