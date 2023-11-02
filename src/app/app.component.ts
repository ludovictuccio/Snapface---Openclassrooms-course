import { Component, OnInit } from '@angular/core';
import { SnapFace } from './models/snap-face.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  mySnap!: SnapFace;
  mySnapTwo!: SnapFace;
  mySnapThree!: SnapFace;

  ngOnInit() {

    this.mySnap = new SnapFace(
      'Mon gros titre', 
      'Ma description',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      false,
      'I like !'
    );
    this.mySnapTwo = new SnapFace(
      'Mon gros titre 2', 
      'Ma description 2',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      false,
      'I like too !'
    );
    this.mySnapThree = new SnapFace(
      'Mon gros titre 3', 
      'Ma description 3',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      false,
      'I like too too !'
    );

  }
}
