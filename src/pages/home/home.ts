import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public age: string;

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController
  ) {

  }

  showAge() {
    if (!this.age) {
      let alert = this.alertController.create({
        title: 'Choose an age!',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.showAgeSpecific();
    }
  }

  showAgeSpecific() {
    switch (this.age) {
      case 'Under 18': {
        let alert = this.alertController.create({
          title: 'Your Age',
          subTitle: 'Your age is: ' + this.age,
          buttons: ['OK']
        });
        alert.present();
        break;
      }
      case '18-24': {
        //statements; 
        break;
      }
      case '25-56': {
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }
}
