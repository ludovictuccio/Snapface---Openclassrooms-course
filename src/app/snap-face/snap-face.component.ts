import { Component, OnInit , Input} from '@angular/core';
import { SnapFace } from '../models/snap-face.model';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.css']
})
export class SnapFaceComponent implements OnInit {
  
  @Input() snapFace!:SnapFace;

  ngOnInit() {
  }

  onAddLike(){

    if (!this.snapFace.isAlreadySnapped) {
      this.snapFace.snaps++;
      this.snapFace.isAlreadySnapped=true;
    } else {
      this.snapFace.snaps--;
      this.snapFace.statusSnap='Oops, un like max!';
      this.snapFace.isAlreadySnapped=false;
    }
  }
}
