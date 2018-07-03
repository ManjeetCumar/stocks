import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageviewer',
  templateUrl: './imageviewer.component.html',
  styleUrls: ['./imageviewer.component.css']
})
export class ImageviewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  selector;
  gamen;
  gameur;
  imgurl = "../assets/images/cat1.jpg"
  game = [{
    name: "cricket",
    url: "../assets/images/cricket.jpg",
    players: ['Sachin', 'Dhoni','Lara','Ricky','Gilcrist']
  },{
    name: "football",
    url: "../assets/images/football.jpg",
    players: ['Ronaldo', 'Gerrad','Pele','Roony','Kaka']
  },
    {
    name: "badminton",
    url: "../assets/images/badminton.jpg",
    players: ['Sania', 'Sindhu']
    },{ 
      name: "boxing",
      url: "../assets/images/box.jpg",
      players: ['Tyson', 'Ali','Rocky']
      },
      {
        name: "kabbadi",
        url: "../assets/images/kabbadi.jpg",
        players: ['Rohit', 'Rahul','nada','majeet','narwal']
        }]

        searchTerm = '';
        // setselector(index){
        //       this.selector= index
        //       console.log("value of selector:",index);
        // }
}
