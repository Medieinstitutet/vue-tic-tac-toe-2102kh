
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
  