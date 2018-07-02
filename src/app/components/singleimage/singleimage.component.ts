import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-singleimage',
  templateUrl: './singleimage.component.html',
  styleUrls: ['./singleimage.component.css']
})
export class SingleimageComponent implements OnInit {

  @Input('selectedgame') thegame;
  constructor() { }

  @Output() backbutton = new EventEmitter()

  ngOnInit() {
  }

}
