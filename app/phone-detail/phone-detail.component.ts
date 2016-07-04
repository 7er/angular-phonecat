import {PhoneData, Phone} from "../core/phone/phone.service";

class PhoneDetailController {
    mainImageUrl: string;
    phone: PhoneData;
    static $inject = ['$routeParams', 'phone'];
    constructor($routeParams: angular.route.IRouteParamsService, phone: Phone) {
        let phoneId = $routeParams['phoneId'];
        phone.get(phoneId).subscribe(data => {
            this.phone = data;
            this.setImage(this.phone.images[0]);
        });
    }

    setImage(imageUrl) {
        this.mainImageUrl = imageUrl;
    }
}

// Register `phoneDetail` component, along with its associated controller and template
angular.module('phoneDetail').component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
