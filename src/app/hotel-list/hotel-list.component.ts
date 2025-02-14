import { Component ,OnInit,Input} from '@angular/core';
import {HotelList} from '../models/hotel-list';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-hotel-list',
  standalone:true,
  imports: [
    NgIf
  ],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent implements OnInit {
  public buttonTitle="Go somewhere";
  @Input() hotellist!:HotelList;
  newhotel!:boolean;
  ngOnInit() {
    this.newhotel=false;
  };
  Onsow() {
  }
  }
