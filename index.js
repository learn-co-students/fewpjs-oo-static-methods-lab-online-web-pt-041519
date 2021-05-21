class Formatter {
  //add static methods here

  static capitalize(str) {
    this.sanitize(str)
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'|\s]+/g, '')
  }

  static titleize(str) {
    let newArr = []
    let words = str.split(' ')
    let ignoredWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    for (let i = 0; i < words.length; i++) {
      if ( i === 0 ) {
          newArr.push( this.capitalize( this.sanitize(words[i]) ) )
        } else {
          if ( ignoredWords.includes( words[i] ) ) {
            newArr.push( this.sanitize(words[i]) )
          } else {
            newArr.push( this.capitalize(this.sanitize(words[i]) ) )
          }
        }
      }
    return newArr.join( " " )
  }
}