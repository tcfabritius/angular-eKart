import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  listOfString:string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah']
}
