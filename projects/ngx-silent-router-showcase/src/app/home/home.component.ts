import { Component, ElementRef, inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ScreenAComponent } from '../screen-a/screen-a.component';
import { ScreenBComponent } from '../screen-b/screen-b.component';
import { ScreenCComponent } from '../screen-c/screen-c.component';
import { SilentCustomEvent, SilentRouter, SilentRoutes } from 'ngxSilentRouter';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  elementRef: ElementRef = inject(ElementRef);

  routes: SilentRoutes = [
    { path: 'screenA', component: ScreenAComponent, title: 'Screen A', data: { input1: 'alejandro' } },
    { path: 'screenB', component: ScreenBComponent, title: 'Screen B' },
    { path: 'screenC', component: ScreenCComponent, title: 'Screen C' }
  ];
  activeRoute: string | undefined = undefined;
  private silentRouter: SilentRouter = inject(SilentRouter);

  ngAfterViewInit(): void {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'assets/prism.js';
    this.elementRef.nativeElement.appendChild(s);
  }

  handleEvents(event: SilentCustomEvent): void {
    switch (event.eventName) {
      case 'myCustomEvent':
        console.log('I have received myCustomEvent with value: ' + event.eventValue);
        break;
      case 'myCustomEvent2':
        console.log('I have received myCustomEvent2 with value: ' + event.eventValue);
        break;
    }
  }

  handleMyCustomEvent(event: Event): void {
    const { detail } = event as CustomEvent;
    console.log(detail);
  }


}
