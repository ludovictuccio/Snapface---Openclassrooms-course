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

  ngOnInit(): void {
    this.title='un titre';
    this.description='une description';
    this.createdDate=new Date();
    this.snaps=6;
  }
}
