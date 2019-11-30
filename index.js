class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }

  static titleize(string) {
    let result = []
    let splitString = string.split(' ')
    let exceptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  
    for (let i = 0; i < splitString.length; i++) {
      if ( i === 0 ) {
          result.push( this.capitalize( splitString[i] ) )
        } else {
          if ( exceptWords.includes( splitString[i] ) ) {
            result.push( splitString[i] )
          } else {
            result.push( this.capitalize( splitString[i] ) )
          }
        }
      }
    return result.join( " " );
  }
}