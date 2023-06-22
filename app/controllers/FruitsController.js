import { AppState } from "../AppState.js"
import { fruitsService } from "../services/FruitsService.js"
import { playersService } from "../services/PlayersService.js"
import { setHTML, setText } from "../utils/Writer.js"




function _drawWords() {
  let activeFruit = AppState.activeFruit
  setText('wordBox', activeFruit)
}




export class FruitsController {
  constructor() {
    console.log('Fruits Controller working')
    // _drawWords()
    AppState.on('activeFruit', _drawWords)
  }

  randomWord() {
    fruitsService.randomWord()
  }


}