'use strict'

module.exports = function printChat (toPrint) {
  const htmlElement = document.getElementById('info-nodes-id')
  const span = document.createElement('span')
  span.className = 'bubble'
  const result = document.createTextNode(toPrint)
  span.appendChild(result)
  htmlElement.appendChild(span)
  htmlElement.lastChild.scrollIntoView(false)
}