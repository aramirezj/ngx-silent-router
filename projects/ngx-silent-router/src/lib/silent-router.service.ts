import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/** Silent router */
@Injectable()
export class SilentRouter {
  public _navigateTo: Subject<string> = new Subject();

  /**
   * Navigate to
   * @param url 
   */
  public navigateByUrl(url: string): void {
    this._navigateTo.next(url);
  }
}
