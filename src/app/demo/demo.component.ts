import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'platzi-store1';
  items = ['ralph', 'perez', 'ortega'];
  power = 10;
  

  addItem(): void{
    this.items.push('nuevo item');
  }

  deleteItem(index: number): void{
    this.items.splice(index, 1);
  }

}
