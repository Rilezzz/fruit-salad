import { AppState } from "../AppState.js"

class FruitsService {
  randomWord() {
    let fruits = AppState.fruits
    let randomNumber = Math.floor(Math.random() * fruits.length)
    let randomWord = fruits[randomNumber]
    // let activeFruit = AppState.activeFruit
    // activeFruit = randomWord
    AppState.activeFruit = randomWord
    // console.log(activeFruit)
    AppState.emit('activeFruit')
  }
}







export const fruitsService = new FruitsService()