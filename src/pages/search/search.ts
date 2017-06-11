import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';

import { Item } from '../../models/item';

import { Items } from '../../providers/providers';

import { Camera } from '@ionic-native/camera';



@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})


export class SearchPage {
  public base64Image: string;

    constructor(private navController: NavController, private camera: Camera) {
        this.base64Image = "https://placehold.it/150x150";

    }

    ionViewDidLoad() {
      //TODO Implement with UserID
      this.takePicture();
    }

    public takePicture() {
        this.camera.getPicture({
            quality : 75,
            destinationType : this.camera.DestinationType.DATA_URL,
            sourceType : this.camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            saveToPhotoAlbum: false
        }).then(imageData => {
            this.base64Image = "data:image/jpeg;base64," + imageData;

        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }

}
