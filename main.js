/* eslint-disable no-unused-vars */
/* global gamesJSON */

var $gameId = Object.keys(JSON.parse(gamesJSON))
var $gameList = []
for (var i = 0; i < $gameId.length; i++) {
  $gameList.push(JSON.parse(gamesJSON)[$gameId[i]])
}
$gameList.sort(function (a, b) {
  return a.players_2weeks - b.players_2weeks
})
$gameList.reverse()
for (var a = 0; a < $gameList.length; a++) {
  var newElement = document.createElement('div')
  var nameEl = document.createElement('span')
  var priceEl = document.createElement('span')
  var devEl = document.createElement('span')
  newElement.className = 'game'
  nameEl.className = 'info'
  priceEl.className = 'info'
  devEl.className = 'info'
  nameEl.textContent = $gameList[a].name
  priceEl.textContent = '$' + $gameList[a].price
  devEl.textContent = $gameList[a].developer
  newElement.append(nameEl, priceEl, devEl)
  document.querySelector('.list').appendChild(newElement)
}
// function createList(item, index, array) {
//   var $span = '<span>' + item + '</span>'
//   var $box = document.createElement('div')
//   $box.innerHTML = $span
// }
// function showList(text, position) {
//   position.appendChild(text)
// }
//
// showList($gameList, document.querySelector('.list'))
