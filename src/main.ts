import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


declare const mixpanel: any;

mixpanel.init('')
mixpanel.track('coso',{
  distinct_id: 'unique client id'
  })
const pageName = window.location.pathname;

const tracking_params = {
  'page_name': pageName,
  'language': navigator.language,
}
mixpanel.track('page_view', tracking_params);
