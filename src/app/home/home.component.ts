import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardData = [
    {
      img:'../../assets/cat piano.jpg',
      cardTtile:"",
      disc:'TWS Airpods_ with Super Sound & High Quality Touch Sensors',
      proPrice:'RS 1,200',
      saveRupes:'Rs 250',
      discount:"-10"
  
    },
    {
      img:'../../assets/space saver.jpg',
      cardTtile:"",
      disc:'Mishbeeka Pack 3  Storage Bag Clothes Storage Box Bins Foldable Closet ',
      proPrice:'Rs 750',
      saveRupes:'Rs 200 ',
      discount:"-20"
    },
    {
      img:'../../assets/airpods.jpg',
      cardTtile:"",
  disc:'Airpods_Pro Wireless Earbuds Bluetooth 5.0 Compatible with IOS',
    proPrice:'RS 2,600',
      saveRupes:'Rs 700',
      discount:"-30"
   },
   {
    img:'../../assets/smart watch.jpg',
    cardTtile:"",
    disc:'Advanced Version Smart Watch Bluetooth Heart Rate Sleep Monitor Fitness Watch IP67 Waterproof',
    proPrice:'RS 1,200',
    saveRupes:'Rs 250',
    discount:"-10"
  },
  {
    img:'../../assets/cable.jpg',
    cardTtile:"",
    disc:'3 in 1 120W 6A Fast Power Type C Cable Micro USB',
    proPrice:'RS 5,705',
    saveRupes:'Rs 450',
    discount:"-40"
  },
 
  
  ]
  newData=[
    {
      img:'../../assets/7pc food container.webp',
      cardtitle:"7pcs food container for storing food",
      proprice:'Rs 500'
  },
  {
    img:'../../assets/ice roller.webp',
    cardtitle:"ice roller for facial massage",
    proprice:'RS 500'
  },
  {
    img:'../../assets/imported kettle.webp',
    cardtitle:"Imported ketttle for tea",
    proprice:'Rs 3500'
  },
  {
    img:'../../assets/tummy trimmer.webp',
    cardtitle:"Tummy trimmer",
    proprice:'RS 4500',
  },
  {
    img:'../../assets/winter pock.webp',
    cardtitle:"Winter pock sweatshirt",
    proprice:'Rs 3999',
  },
  // {
  //   img:'../../assets/watches for webpmen',
  //   cardtitle:"Watches for men and boys",
  //   proprice:'Rs 500',
  // },
  {
    img:'../../assets/color matte.webp',
    cardtitle:"Color matte eyeshadows",
    proprice:'Rs 1500',
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
