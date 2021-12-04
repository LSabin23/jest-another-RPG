const inquirer = require('inquirer')
const Player = require('./Player')
const Enemy = require('./Enemy')

function Game () {
  this.roundNumber = 0
  this.isPlayerTurn = false
  this.enemies = []
  this.currentEnemy
  this.player
}

Game.prototype.initializeGame = function () {
  this.enemies.push(new Enemy('goblin', 'sword'))
  this.enemies.push(new Enemy('orc', 'baseball bat'))
  this.enemies.push(new Enemy('skeleton', 'axe'))

  // set the currentEnemy to the first item in the enemies array
  this.currentEnemy = this.enemies[0]

  // prompt the player for their name after the enemy data has been initialized
  inquirer
    .prompt({
      type: 'text',
      name: 'name',
      message: 'What is your name?'
    })
    // destructure name from the prompt object
    .then(({ name }) => {
      this.player = new Player(name)

      this.startNewBattle()
    })
}

module.exports = Game
