import { AppState } from "../AppState.js"
import { generateId } from "../utils/generateId.js"

export class Player {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.score = data.score ? data.score : 0
    this.highScore = data.highScore ? data.highScore : 0
  }

  get listTemplate() {
    return `<li class="selectable" onclick="app.PlayersController.activePlayer('${this.id}')">${this.ComputeSelected} ${this.name} </li> `
  }

  get activePlayerTemplate() {
    return `
  <p>Name: ${this.name} Score: ${this.score} High Score: ${this.highScore}</p>
  `
  }

  get ComputeSelected() {
    if (!AppState.activePlayer || AppState.activePlayer.id != this.id) {
      return ``
    }
    return `✅`


  }

}




