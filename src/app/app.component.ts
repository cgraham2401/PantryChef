import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private camera: Camera) { }

  ngOnInit() {
    this.initializeCordova();
  }

  initializeCordova() {
    document.addEventListener("deviceready", () => {
      console.log("Cordova is ready!");
    }, false);
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData: string) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
      
    }).catch((err: any) => {
      
      console.error(err);
    });
  }
}
