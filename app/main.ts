//import { UpgradeAdapter } from '@angular/upgrade';
import { HTTP_PROVIDERS } from '@angular/http';
import {Phone} from "./core/phone/phone.service";
import {Type} from "@angular/core";
import {PhoneListComponent} from "./phone-list/phone-list.component";
import {PhoneDetailComponent} from "./phone-detail/phone-detail.component";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

// let upgradeAdapter = new UpgradeAdapter();
// upgradeAdapter.addProvider(HTTP_PROVIDERS);
// upgradeAdapter.addProvider(<Type>Phone);
// angular.module('core.phone').factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));
// angular.module('phoneList')
//   .directive('phoneList',
//     <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(<Type>PhoneListComponent));
// angular.module('phoneDetail')
//   .directive('phoneDetail',
//     <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(<Type>PhoneDetailComponent));
// upgradeAdapter.upgradeNg1Provider('$routeParams');
// upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);

bootstrap(<Type>AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  //{ provide: APP_BASE_HREF, useValue: '!' },
  {provide: LocationStrategy, useClass: HashLocationStrategy },
  Phone
])
