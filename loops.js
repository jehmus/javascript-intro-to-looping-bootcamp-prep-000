function forLoop(array) {
  for (var i=1; i<26; i++) {
    if (i===1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  console.log(array)

  return array
}

forLoop(["sup"])

function whileLoop(num) {
  while (num > 0) {
    console.log(num)
    num--
  }
  return console.log(`done`)
}

whileLoop(15)

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5 
  }
  
  do {
    array.pop()
  } while ( array.length > 0 && maybeTrue() );
  
  return array
}

doWhileLoop(["Sup", "wow", "huge"])
