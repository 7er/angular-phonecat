import { UpgradeAdapter } from '@angular/upgrade';
import { HTTP_PROVIDERS } from '@angular/http';
import {Phone} from "./core/phone/phone.service";
import {Type} from "@angular/core";
import {PhoneListComponent} from "./phone-list/phone-list.component";
import {PhoneDetailComponent} from "./phone-detail/phone-detail.component";


let upgradeAdapter = new UpgradeAdapter();
upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.addProvider(<Type>Phone);
angular.module('core.phone').factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));
angular.module('phoneList')
  .directive('phoneList',
    <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(<Type>PhoneListComponent));
angular.module('phoneDetail')
  .directive('phoneDetail',
    <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(<Type>PhoneDetailComponent));
upgradeAdapter.upgradeNg1Provider('$routeParams');
upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);