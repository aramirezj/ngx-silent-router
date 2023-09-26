import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAComponent } from './screen-a.component';

describe('ScreenAComponent', () => {
  let component: ScreenAComponent;
  let fixture: ComponentFixture<ScreenAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenAComponent]
    });
    fixture = TestBed.createComponent(ScreenAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
