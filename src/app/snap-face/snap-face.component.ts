import { Component, OnInit , Input} from '@angular/core';
import { SnapFace } from '../models/snap-face.model';
import { SnapFaceService } from '../services/snap-face.service';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.css']
})
export class SnapFaceComponent implements OnInit {
  
  @Input() snapFace!:SnapFace;

  constructor(private snapFaceService : SnapFaceService){}

  ngOnInit() {
  }

  onAddLike(){

    if (!this.snapFace.isAlreadySnapped) {
      this.snapFaceService.snapFaceById(this.snapFace.id, 'snap');
      this.snapFace.isAlreadySnapped=true;
    } else {
      this.snapFaceService.snapFaceById(this.snapFace.id, 'unsnap');
      this.snapFace.statusSnap='Oops, un like max!';
      this.snapFace.isAlreadySnapped=false;
    }
  }
}
