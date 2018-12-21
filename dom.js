import getUsers from './users.js'

function addUserToDOM(name) {
  const node = document.createElement('li')
  const text = document.createTextNode(name)
  node.appendChild(text)

  document.getElementById('users')
    .appendChild(node)
}

document.getElementById('submit')
  .addEventListener('click', function() {
    let input = document.getElementById('input')
    addUserToDOM(input.value)

    input.value = ''
  })

let users = getUsers()
for (let i = 0; i < users.length; i++){
  addUserToDOM(users[i])
}


