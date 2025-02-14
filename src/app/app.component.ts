import { Component, OnInit } from '@angular/core';
import {HotelListComponent} from './hotel-list/hotel-list.component';
import {HotelList} from './models/hotel-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HotelListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public listNewHotel="Voir les Nouveau Hotels";
  public nbNewHotel=3;

  public newHotell=false;
  myhotel1!:HotelList;
  myhotel2!:HotelList;
  myhotel3!:HotelList;
  myhotel4!:HotelList;
  myhotel5!:HotelList;
  myhotel6!:HotelList;
  OnSow(){// fonction pour voir la list des hotels dispo
    if( this.newHotell){
      this.newHotell=false;
      //this.myhotel1.newHotel='';
      //this.myhotel3.newHotel='';
      //this.myhotel5.newHotel='';
      this.myhotel1.setNewHotel("");
      this.myhotel3.setNewHotel("");
      this.myhotel6.setNewHotel("");
      this.listNewHotel="Voir les Nouveau Hotels";
    }else {
      this.newHotell=true;
      //this.myhotel1.newHotel='new';
      //this.myhotel3.newHotel='new';
      //this.myhotel5.newHotel='new';
      this.myhotel1.setNewHotel("new");
      this.myhotel3.setNewHotel("new");
      this.myhotel6.setNewHotel("new");
      this.listNewHotel="Cacher les Nouveau Hotels";
    }
  }
  ngOnInit() {

    this.myhotel1 = new HotelList (
      'https://th.bing.com/th/id/OIP.6tEokJ3OiDWyZEtydQb4MQHaFj?w=251&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      'hotel1',
      'Hotel1',
      'Relax at Our Wellness Inspired Hotel in Eugene, Oregon​EVEN Hotel in Eugene ' +
      'provides a unique wellness-focused experience near Autzen Stadium / downtown Eugene with in-room exercise equipment,' +
      ' a heated indoor pool, and a state-of-the-art athletic studio and delicious healthy ...',
    );
    this.myhotel2 = new HotelList (
      'https://th.bing.com/th/id/OIP.6tEokJ3OiDWyZEtydQb4MQHaFj?w=251&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      'hotel2',
      'Hotel2',
      'Relax at Our Wellness Inspired Hotel in Eugene, Oregon​EVEN Hotel in Eugene ' +
      'provides a unique wellness-focused experience near Autzen Stadium / downtown Eugene with in-room exercise equipment,' +
      ' a heated indoor pool, and a state-of-the-art athletic studio and delicious healthy ...',
    );
    this.myhotel3 = new HotelList (
      'https://th.bing.com/th/id/OIP.6tEokJ3OiDWyZEtydQb4MQHaFj?w=251&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      'hotel3',
      'Hotel3',
      'Relax at Our Wellness Inspired Hotel in Eugene, Oregon​EVEN Hotel in Eugene ' +
      'provides a unique wellness-focused experience near Autzen Stadium / downtown Eugene with in-room exercise equipment,' +
      ' a heated indoor pool, and a state-of-the-art athletic studio and delicious healthy ...',
    );
    this.myhotel4 = new HotelList (
      'https://th.bing.com/th/id/OIP.6tEokJ3OiDWyZEtydQb4MQHaFj?w=251&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      'hotel4',
      'Hotel4',
      'Relax at Our Wellness Inspired Hotel in Eugene, Oregon​EVEN Hotel in Eugene ' +
      'provides a unique wellness-focused experience near Autzen Stadium / downtown Eugene with in-room exercise equipment,' +
      ' a heated indoor pool, and a state-of-the-art athletic studio and delicious healthy ...',
    );
    this.myhotel5 = new HotelList (
      'https://th.bing.com/th/id/OIP.6tEokJ3OiDWyZEtydQb4MQHaFj?w=251&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      'hotel5',
      'Hotel5',
      'Relax at Our Wellness Inspired Hotel in Eugene, Oregon​EVEN Hotel in Eugene ' +
      'provides a unique wellness-focused experience near Autzen Stadium / downtown Eugene with in-room exercise equipment,' +
      ' a heated indoor pool, and a state-of-the-art athletic studio and delicious healthy ...',
    );
    this.myhotel6 = new HotelList (
      'https://th.bing.com/th/id/OIP.6tEokJ3OiDWyZEtydQb4MQHaFj?w=251&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      'hotel6',
      'Hotel6',
      'Relax at Our Wellness Inspired Hotel in Eugene, Oregon​EVEN Hotel in Eugene ' +
      'provides a unique wellness-focused experience near Autzen Stadium / downtown Eugene with in-room exercise equipment,' +
      ' a heated indoor pool, and a state-of-the-art athletic studio and delicious healthy ...',
    );
    this.myhotel1.setNewHotel("");
    this.myhotel3.setNewHotel("");
    this.myhotel6.setNewHotel("");

  }
}
