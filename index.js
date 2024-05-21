let result = null

function addEmojies(message, emoji) {
  return emoji + " " + message + " " + emoji
}

result = addEmojies("hello", "WAVE")
console.log(result)