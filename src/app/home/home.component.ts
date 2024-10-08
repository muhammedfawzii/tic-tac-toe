import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  board!:string[]
  playerTurn:string = 'X'
  gameEnd:boolean = false
  winner = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6]
  ]
ngOnInit(): void {
  this.board = new Array(9).fill('')
}
// player(index:number){
// this.board[index] = this.playerTurn
// this.playerTurn = this.playerTurn == 'X'? 'O': 'X'
// this.gameEnd = true
// }
player(index: number) {
  if (!this.board[index] && !this.gameEnd) { // Check if square is empty and game hasn't ended
    this.board[index] = this.playerTurn;
    if (this.checkWinner()) { // Check if the current player has won
      this.gameEnd = true; // Set gameEnded to true
    } else {
      this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X'; // Switch turns
    }
  }
}
resetGame():void{
this.board = new Array(9).fill('')
this.playerTurn = 'X'
this.gameEnd = false

}
checkWinner(): boolean {
  // Use 'some' to check for a winner
  return this.winner.some(combin => 
    this.board[combin[0]] && 
    this.board[combin[0]] === this.board[combin[1]] && 
    this.board[combin[1]] === this.board[combin[2]]
  );
}
}
