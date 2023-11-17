import { Injectable } from '@angular/core';
import { SnapFace } from '../models/snap-face.model';

@Injectable({
  providedIn: 'root'
})
export class SnapFaceService {
  
    snapFaces: SnapFace[] = [

        {
            id:1,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 0,
            isAlreadySnapped:false,
            statusSnap: 'I like !',
            location:'La montagne'
          },
          {
            id:2,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnées.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            createdDate: new Date(),
            snaps: 0,
            isAlreadySnapped:false,
            statusSnap: 'I like !'
          },
           {
            id:3,
            title: 'Un bon repas',
            description: 'Mmmh que c\'est bon !',
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createdDate: new Date(),
            snaps: 0,
            isAlreadySnapped:false,
            statusSnap: 'I like !'
          }
      
        ];
      
        getAllFaceSnaps(): SnapFace[] {
            return this.snapFaces;
        }

        snapFaceById(snapFaceId:number):void{
            const snapFaceSnap =this.snapFaces.find(snapFace => snapFace.id === snapFaceId);
            if (snapFaceSnap) {
                snapFaceSnap.snaps++;
            }else{
                throw console.error('SnapFace not found !');
                
            }
        }

        snapFaceByIdNotfound(snapFaceId:number):void{
            const snapFaceSnap =this.snapFaces.find(snapFace => snapFace.id === snapFaceId);
            if (snapFaceSnap) {
                snapFaceSnap.snaps--;
            }else{
                throw console.error('SnapFace not found !');
                
            }
        }
    

}