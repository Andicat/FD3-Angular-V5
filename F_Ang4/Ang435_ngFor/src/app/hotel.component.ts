import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.css']
})
export class HotelComponent {

  private hotelName:string='California';

  public rooms:Array<{num:number,beds:number}>=[
    { num:22, beds:2 },
    { num:25, beds:1 },
    { num:28, beds:4 },
  ];

  private photo:string="http://fe.it-academy.by/Examples/Hotel/hotel1.jpg";

  private stars:number=4;

  getName():string {
    return this.hotelName;
  }

  getPhoto():string {
    return this.photo;
  };

  getStars():number {
    return this.stars;
  };

  /*
  trackByRoomNum(roomIndex:number,room:{num:number,beds:number}):any {
    return room.num;
  }
  */

 changeRooms():void {
  this.rooms=[
    { num:22, beds:2 },
    { num:25, beds:5 },
    { num:28, beds:4 },
  ];
 }

}
