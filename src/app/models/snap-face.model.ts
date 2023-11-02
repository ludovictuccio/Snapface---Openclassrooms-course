export class SnapFace{

    constructor(public  title:string,
        public description:string,
        public createdDate:Date,
        public  snaps:number,
        public imageUrl:string,
        public isAlreadySnapped:boolean,
        public statusSnap:string ){
    }
}