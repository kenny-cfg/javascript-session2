function banner(messageInsideFunction) {
  console.log("_________________________")
  console.log(messageInsideFunction)
  console.log("_________________________")
  messageInsideFunction = "I am done with the message"
  console.log(messageInsideFunction)
  console.log('Message: ', message)
}

const bannerLambda = (messageInsideLambdaFunction) => {
  console.log("_________________________")
  console.log(messageInsideLambdaFunction)
  console.log("_________________________")
  console.log('Message: ', message)
}

const bannerFunction = function(message) {
  console.log("_________________________")
  console.log(message)
  console.log("_________________________")
}

const message = "Hi"
bannerLambda(message)
console.log(message)