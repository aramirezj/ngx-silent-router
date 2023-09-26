import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-screen-c',
  templateUrl: './screen-c.component.html',
  styleUrls: ['./screen-c.component.scss']
})
export class ScreenCComponent {
  @Input({required:false}) input2!:string;

  ngOnInit(){
    console.log(this.input2);
  }
}
