/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { ChangeDetectorRef, Component, ComponentRef, ElementRef, EventEmitter, Input, Output, SimpleChange, Type, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { SilentCustomEvent } from './SilentCustomEvent';
import { Routes, Data, Route } from '@angular/router';
import { SilentRouter } from './silent-router.service';

/** Silent Router component */
@Component({
  selector: 'ngx-silent-router',
  template: '<ng-container #varianteContainer></ng-container>',
})
export class NgxSilentRouterComponent {
  /** Visibilidad del futuro contenedor del componente */
  @ViewChild('varianteContainer', { read: ViewContainerRef }) private _varianteContainer!: ViewContainerRef;
  /** Configured routes */
  @Input({ required: true }) public routes!: Routes;
  /** Active route */
  private _activeRoute: string | undefined;
  /** Active route setter */
  @Input()
  set activeRoute(value: string | undefined) {
    ;
    this._activeRoute = value;
    this._invokeComponent();
  }
  /** Emits a custom event */
  @Output() public events: EventEmitter<SilentCustomEvent> = new EventEmitter();
  /** Servicio titulo */
  private _titleService: Title = inject(Title);
  /** Instance being loaded */
  public variantInstance: ComponentRef<any> | undefined;
  /** ElementRef */
  private _elementRef: ElementRef = inject(ElementRef);
  /** SuscriptionList */
  private _subscriptions: Subscription[] = [];
  /** Subscription of the router */
  private _subRouter: Subscription | undefined;

  /** Silent Router */
  private _silentRouter: SilentRouter = inject(SilentRouter);
  /** Summons the component when the view is initiated */
  private ngAfterViewInit(): void {
    this._invokeComponent();
    this._silentRouter._navigateTo.subscribe(url => this.activeRoute = url);
  }

  /** Unsubscribe from the router */
  private ngOnDestroy(): void {
    if(this._subRouter) {this._subRouter.unsubscribe();}
  }

  /** Invokes the component */
  private _invokeComponent(): void {
    this._subscriptions.forEach(sub => sub.unsubscribe());
    this._subscriptions = [];
    if (this.variantInstance) {
      this.variantInstance.destroy();
      this.variantInstance = undefined;
    }

    if (this._activeRoute) {
      const activeRoute = this._getActiveRoute();
      if (activeRoute) {
        this.variantInstance = this._varianteContainer.createComponent(activeRoute.component as Type<any>);
        this._setInputs(activeRoute.data);
        this._hookEmitters();
        if (activeRoute.title) { this._titleService.setTitle(activeRoute.title as string); }
      } else {
        throw new Error('The ngx-silent-router could not find the activeRoute set.');
      }
    }

  }

  /**
   * Sets the inputs in the instance
   * @param inputs Inputs
   */
  private _setInputs(inputs: Data | undefined): void {
    if (this.variantInstance && inputs) {
      Object.keys(inputs).forEach(key => this.variantInstance?.setInput(key, inputs?.[key]));
    }
  }

  /** With the events of type EventEmitter in the instance, hooks them */
  private _hookEmitters(): void {
    if (this.variantInstance) {
      const keys = Object.keys(this.variantInstance.instance);
      for (const key of keys) {
        const property: unknown = this.variantInstance.instance[key];
        if (property instanceof EventEmitter) {
          this._subscriptions.push((property as EventEmitter<any>).subscribe(value => {
            const event = new CustomEvent(key, {
              detail: value
            });
            this._elementRef.nativeElement.dispatchEvent(event);
            this.events.emit({ eventName: key, eventValue: value });
          }));
        }
      }
    }
  }

  /**
   * Gets the active route
   * @returns The route active
   */
  private _getActiveRoute(): Route | undefined {
    return this.routes.find(route => this._activeRoute === route.path);
  }
}
