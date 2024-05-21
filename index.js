function banner(message) {
  console.log("_________________________")
  console.log(message)
  console.log("_________________________")
}

const bannerLambda = (message) => {
  console.log("_________________________")
  console.log(message)
  console.log("_________________________")
}

const bannerFunction = function(message) {
  console.log("_________________________")
  console.log(message)
  console.log("_________________________")
}

banner('Hello world')
banner('Goodbye Mars')
