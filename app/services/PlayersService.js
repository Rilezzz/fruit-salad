import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"


class PlayersService {

  createPlayer(playerData) {
    // console.log('Create player serv')
    const newPlayer = new Player(playerData)
    AppState.players.push(newPlayer)
    AppState.emit('players')
  }


  activePlayer(playerId) {
    const selectedPlayer = AppState.players.find(player => player.id == playerId)

    AppState.activePlayer = selectedPlayer
    console.log('active player', AppState.activePlayer)
  }
}




export const playersService = new PlayersService()