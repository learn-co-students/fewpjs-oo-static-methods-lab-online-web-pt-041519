class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^0-9a-zA-Z  '-]/g, '')
  }

  static titleize(string){
    let splitString = string.split(' ')
    let newArray = []
    let ignoredWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    splitString.map( (s) => { 
      if(s === splitString[0]) {
        newArray.push(Formatter.capitalize(s))
      } else if ( ignoredWords.includes(s) ) {
        newArray.push(s)
      } else {
        newArray.push(Formatter.capitalize(s))
      }
    })
    return newArray.join(' ')
     
  }
}