import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Items } from '../../providers/providers';
import { Item } from '../../models/item';
import { DataService } from '../../app/data.service';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  stories: any[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, private dataService:DataService) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
   //
  ionViewDidLoad() {
    //TODO Implement with UserID
    this.dataService.getAllStories(1).subscribe(
      //data Conversion takes place here
      (data) => this.stories = data,
      error => alert(error),
      () => console.log("Finished")
    );
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addPartner() {
    this.navCtrl.push(ItemCreatePage);
  }


postStory(userID: number, photo: any, note: String, location: String ){
    //Create JSON Data which will be send
    var upload_id : number;
    upload_id = this.dataService.postPhoto(photo);

    //Create JSON from Data
    var postData : any = {};
    postData =
              {"user_id": userID,
              "upload_id": upload_id,
              "note": note,
              "location": location };
      this.dataService.postStoryToDatabase("File","sdf","sd",postData)
         .subscribe(
            data => { },
            error => { },
            () => { }
         );
}

postPhoto(photo: any){
  this.dataService.postPhoto(photo);
}

  /**
   * Delete an item from the list of items.
   */
deleteStoryById(id:number){
   this.dataService.deleteStoryById(id)
      .subscribe(
         data => { },
         error => { },
         () => { }
      );
}
  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}
