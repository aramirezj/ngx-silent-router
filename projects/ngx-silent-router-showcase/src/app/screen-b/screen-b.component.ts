import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-screen-b',
  templateUrl: './screen-b.component.html',
  styleUrls: ['./screen-b.component.scss']
})
export class ScreenBComponent {
  @Input({required:false}) input1!:string;

  ngOnInit(){
    console.log(this.input1);
  }
}
