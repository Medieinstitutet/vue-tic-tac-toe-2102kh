// export class Player {
//     playerName: string | number | symbol | undefined;
//     constructor(
//         playerName: string,
//         point: number,
//         turn: boolean,
//     ) {}
// }

// export class Player{
//     playerName:string;
//     point:number;
//     turn:boolean;
//     constructor(public text:string){
//         this.playerName ="";
//         this.point = 0;
//         this.turn = false
//     }
// }
export class Player {
    playerName: string;
    point: number;
    turn: boolean;
  
    constructor(playerName: string, point: number, turn: boolean) {
      this.playerName = playerName;
      this.point = point;
      this.turn = turn;
    }
  }
  