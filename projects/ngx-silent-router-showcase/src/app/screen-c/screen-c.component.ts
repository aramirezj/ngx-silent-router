import { Component, Input } from '@angular/core';

@Component({
  selector: 'pg-screen-c',
  templateUrl: './screen-c.component.html',
  styleUrls: ['./screen-c.component.scss']
})
export class ScreenCComponent {
  @Input() input2!:string;

  ngOnInit(){
    console.log(this.input2);
  }
}
