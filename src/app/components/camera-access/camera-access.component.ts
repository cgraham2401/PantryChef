import { Component } from '@angular/core';

// Declare the global navigator to satisfy TypeScript and acknowledge the camera property
declare var navigator: any;

@Component({
  selector: 'app-camera-access',
  templateUrl: './camera-access.component.html',
  styleUrls: ['./camera-access.component.scss'],
})
export class CameraAccessComponent {

  // Property to hold the base64 image data string
  imageDataUrl: string = '';

  constructor() { }

  takePicture() {
    // Define camera options
    const options = {
      quality: 50,
      destinationType: navigator.camera.DestinationType.DATA_URL,
      encodingType: navigator.camera.EncodingType.JPEG,
      mediaType: navigator.camera.MediaType.PICTURE
    };

    navigator.camera.getPicture((imageData: string) => {
      // On success, imageData is a base64 encoded string
      this.imageDataUrl = 'data:image/jpeg;base64,' + imageData;
      // Now, imageDataUrl can be used in the template to display the image or for other processing
    }, (error: any) => {
      // Handle error
      console.error("Camera error: ", error);
    }, options);
  }
}
