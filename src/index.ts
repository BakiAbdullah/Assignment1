function formatString(input: string, toUpper?: boolean) {
  if (toUpper !== false) {
  return input.toUpperCase()
  } else {
  return input.toLowerCase()
  }
}

// console.log( formatString('baki'))
// console.log( formatString('baki',true))
// console.log( formatString('BAKI', false))
