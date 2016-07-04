
// Register `phoneList` component, along with its associated controller and template


import {Phone, PhoneData} from "../core/phone/phone.service";

class PhoneListController {
  phones: PhoneData[];
  orderProp: string;
  query: string;
  static $inject = ['phone'];
  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
}

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });
