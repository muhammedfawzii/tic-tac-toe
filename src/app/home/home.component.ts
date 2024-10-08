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
player(index:number){
this.board[index] = this.playerTurn
this.playerTurn = this.playerTurn == 'X'? 'O': 'X'
}
resetGame():void{
this.board = new Array(9).fill('')
this.playerTurn = 'X'

}
}
