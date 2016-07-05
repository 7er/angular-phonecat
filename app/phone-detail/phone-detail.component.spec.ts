import { HTTP_PROVIDERS } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {
  describe,
  beforeEachProviders,
  inject,
  it,
  expect
} from '@angular/core/testing';
import {
  TestComponentBuilder,
  ComponentFixture
} from '@angular/compiler/testing';
import { PhoneDetailComponent } from './phone-detail.component';
import { Phone, PhoneData } from '../core/phone/phone.service';
import {RouteParams} from "@angular/router-deprecated";
import {Type} from "@angular/core";

function xyzPhoneData(): PhoneData {
  return {
    name: 'phone xyz',
    snippet: '',
    images: ['image/url1.png', 'image/url2.png'],
    "sizeAndWeight": {
      "dimensions": [
        "199.9 mm (w)",
        "119.8 mm (h)",
        "12.4 mm (d)"
      ],
      "weight": "450.0 grams"
    },
    "battery": {
      "standbyTime": "",
      "talkTime": "",
      "type": "Lithium Ion (Li-Ion) (2780 mAH)"
    },
    "connectivity": {
      "bluetooth": "Bluetooth 2.1",
      "cell": "T-mobile HSPA+ @ 2100/1900/AWS/850 MHz",
      "gps": true,
      "infrared": false,
      "wifi": "802.11 b/g"
    },
    "android": {
      "os": "Android 2.2",
      "ui": "Dell Stage"
    },
    "display": {
      "screenResolution": "WVGA (800 x 480)",
      "screenSize": "7.0 inches",
      "touchScreen": true
    },
    "hardware": {
      "accelerometer": true,
      "audioJack": "3.5mm",
      "cpu": "nVidia Tegra T20",
      "fmRadio": false,
      "physicalKeyboard": false,
      "usb": "USB 2.0"
    },
    "camera": {
      "features": [
        "Flash",
        "Video"
      ],
      "primary": "5.0 megapixels"
    },
    "storage": {
      "flash": "16000MB",
      "ram": "512MB"
    }

  };
}
class MockPhone extends Phone {
  get(id: string): Observable<PhoneData> {
    //noinspection TypeScriptUnresolvedFunction
    return Observable.of(xyzPhoneData());
  }
}
describe('PhoneDetailComponent', () => {
  beforeEachProviders(() => [
    { provide: Phone, useClass: MockPhone },
    { provide: RouteParams, useValue: new RouteParams({phoneId: 'xyz'})},
    HTTP_PROVIDERS
  ]);
  it('should fetch phone detail',
    inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(<Type>PhoneDetailComponent)
        .then((fixture: ComponentFixture<PhoneDetailComponent>) => {
          fixture.detectChanges();
          let compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('h1')).toHaveText(xyzPhoneData().name);
        });
    }));
});
