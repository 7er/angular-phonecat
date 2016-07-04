import {PhoneData, Phone} from "../core/phone/phone.service";
import {Component, Inject, Type, Input, Output} from "@angular/core";
import {CheckmarkPipe} from "../core/checkmark/checkmark.pipe";

@Component({
    selector: 'phone-detail',
    templateUrl: 'phone-detail/phone-detail.template.html',
    pipes: [ <Type>CheckmarkPipe ]
})
export class PhoneDetailComponent {
    mainImageUrl: string;
    phone: PhoneData;
    constructor(@Inject('$routeParams')
                  $routeParams: angular.route.IRouteParamsService,
                phone: Phone) {
        let phoneId = $routeParams['phoneId'];
        phone.get(phoneId).subscribe(data => {
            this.phone = data;
            this.setImage(this.phone.images[0]);
        });
    }

    setImage(imageUrl) {
        console.log("setImage: ", imageUrl);
        this.mainImageUrl = imageUrl;
    }
}
