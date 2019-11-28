class Formatter {
  //add static methods here

  static capitalize(string) {
    let firstLetter = string[0].toUpperCase()
    let lettersAfterFirst = string.slice(1)
    return `${firstLetter}${lettersAfterFirst}`
  }


  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  

  static titleize(sentence) {
    let results = []
    let splitSentence = sentence.split(' ')
    let nonCapitalizedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  
    for (let i = 0; i < splitSentence.length; i++) {
      if ( i == 0 ) {
          results.push( this.capitalize( splitSentence[i] ) )
        } else {
          if ( nonCapitalizedWords.includes( splitSentence[i] ) ) {
            results.push( splitSentence[i] )
          } else {
            results.push( this.capitalize( splitSentence[i] ) )
          }
        }
      }
    return results.join( " " );
  }
}