import { AppState } from "../AppState.js"
import { playersService } from "../services/PlayersService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"

function _drawPlayers() {
  let template = ''

  let players = AppState.players

  players.forEach(player => template += player.listTemplate)
  setHTML('players-list', template)
}


function _drawActivePlayer() {
  const activePlayer = AppState.activePlayer

  if (!activePlayer) {
    setHTML('active-player', "Please select Player!")
  } else {
    setHTML('active-player', activePlayer.activePlayerTemplate)
  }

}


export class PlayersController {
  constructor() {
    console.log('Player controller working?')

    _drawPlayers()
    _drawActivePlayer()
    AppState.on('players', _drawPlayers)
    AppState.on('activePlayer', _drawActivePlayer)
    AppState.on('activePlayer', _drawPlayers)
  }

  createPlayer(event) {
    event.preventDefault()
    console.log('Create Player')

    const form = event.target

    const playerData = getFormData(form)

    playersService.createPlayer(playerData)

    form.reset()

  }

  activePlayer(playerId) {
    playersService.activePlayer(playerId)
  }

}