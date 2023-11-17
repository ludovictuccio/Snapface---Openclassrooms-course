import { Component , OnInit} from '@angular/core';
import { SnapFace } from '../models/snap-face.model';
import { SnapFaceService } from '../services/snap-face.service';

@Component({
  selector: 'app-snap-face-list',
  templateUrl: './snap-face-list.component.html',
  styleUrls: ['./snap-face-list.component.css']
})
export class SnapFaceListComponent implements OnInit {

  snapFaces!: SnapFace[];
  
  constructor(private snapFaceService : SnapFaceService){}
  
  ngOnInit() {

    this.snapFaces = this.snapFaceService.getAllFaceSnaps();
  
  }
}
