export class HotelList {
  newHotel?: string;
 constructor(
   public  CardImgUrl:string,
   public  cardAlt:string,
   public cardTitle: string,
   public cardText: string,
 ) {}
  setNewHotel(newHotel:string){
   this.newHotel = newHotel;
  }
}
