import {PhoneData, Phone} from "../core/phone/phone.service";
import {Component, Inject, Type, Input, Output} from "@angular/core";
import {CheckmarkPipe} from "../core/checkmark/checkmark.pipe";
import {RouteParams} from "@angular/router-deprecated";

@Component({
    selector: 'phone-detail',
    templateUrl: 'app/phone-detail/phone-detail.template.html',
    pipes: [ <Type>CheckmarkPipe ]
})
export class PhoneDetailComponent {
    mainImageUrl: string;
    phone: PhoneData;
    constructor(routeParams: RouteParams, phone: Phone) {
        let phoneId = routeParams.get('phoneId');
        phone.get(phoneId).subscribe(data => {
            this.phone = data;
            this.setImage(this.phone.images[0]);
        });
    }

    setImage(imageUrl) {
        this.mainImageUrl = imageUrl;
    }
}
