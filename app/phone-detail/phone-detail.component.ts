class PhoneDetailController {
    mainImageUrl: string;
    phone: any;
    static $inject = ['$routeParams', 'Phone'];
    constructor($routeParams, Phone) {

        this.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
            this.setImage(phone.images[0]);
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
