import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.css']
})
export class SnapFaceComponent implements OnInit {
  title!:string;
  description!:string;
  createdDate!:Date;
  snaps!:number;
  imageUrl!:string;
  isAlreadySnapped!:boolean;
  statusSnap!:string;

  ngOnInit(): void {
    this.title='un titre';
    this.description='une description';
    this.createdDate=new Date();
    this.snaps=6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.isAlreadySnapped=false;
    this.statusSnap='I like !';
  }

  onAddLike(){
    if (!this.isAlreadySnapped) {
      this.snaps++;
      this.isAlreadySnapped=true;
    } else {
      this.statusSnap='Oops, un like max!';
    }
  }
}
