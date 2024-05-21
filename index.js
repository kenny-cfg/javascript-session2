let result = null

function addEmojies(message, emoji) {
  let result = emoji + " " + message + " " + emoji
}

addEmojies("hello", "WAVE")
console.log(result)