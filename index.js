class Formatter {
  //add static methods here
  static capitalize(string){
    // get first letter of word ( s) upcase it ( S ) , add the rest to it ( String)
    return   string.charAt(0).toUpperCase()  + string.slice(1) 
  }
  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace( /[^A-Za-z0-9 '-]/g, '' ); 
  }

  //a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
  static titleize(sentence){
    let notIncludeWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    //array ofg words, so i can loop through
    let sentenceArr = sentence.toLowerCase().split(" ")
    let test = []
  

    //look through every element
    // sentenceArr.forEach(word => { 
    //   if (!notIncludeWords.includes(word) || word === 0) 
    //   {
    //     test.push(this.capitalize(word))
    //   }
    //   else
    //   {
    //     test.push(word)
    //   }
    // })
    // return test.join(" ") 


    for ( let n = 0; n < sentenceArr.length; n++ ) {
      if ( n == 0 ) 
      {
        test.push( this.capitalize( sentenceArr[ n ] ) )
      } 
      else 
      {
        if ( notIncludeWords.includes( sentenceArr[ n ] ) ) 
        {
          test.push( sentenceArr[ n ] )
        } 
        else 
        {
          test.push( this.capitalize( sentenceArr[ n ] ) )
        }
      } 
    }
      return test.join(" ") 

 
  }
}
 