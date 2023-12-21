import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';


@Injectable({
  providedIn: 'root'
})
export class MixpanelServiceService {

  /**
   * Initialize mixpanel.
   *
   * @param {string} userToken
   * @memberof MixpanelServiceService
   */
  init(userToken: string): void {
    mixpanel.init('');
    mixpanel.identify(userToken);
  }

  /**
   * Push new action to mixpanel.
   *
   * @param {string} id Name of the action to track.
   * @param {*} [action={}] Actions object with custom properties.
   * @memberof MixpanelServiceService
   */
  track(id: string, action: any = {}): void {
    mixpanel.track(id, action);
  }
}

