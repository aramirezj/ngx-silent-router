import { Component, Input } from '@angular/core';

@Component({
  selector: 'pg-screen-b',
  templateUrl: './screen-b.component.html',
  styleUrls: ['./screen-b.component.scss']
})
export class ScreenBComponent {
  @Input() input1!:string;

  ngOnInit(){
    console.log(this.input1);
  }
}
