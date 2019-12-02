class Formatter {

  // Capitalize first letter in string
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // Remove all non-alpha characters except dash, single quotes, and spaces
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  // Capitalize all words in string except a, an, but, of, and, for, at, by, from. Always capitalize first word.
  static titleize(string){
    let words = string.toLowerCase().split(' ')
    var except = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]

    // Test for first word and exceptions
    for (let i = 0; i < words.length; i ++) {
      if ((i === 0) || !except.includes(words[i])) {
        words[i] = this.capitalize(words[i])
      }
    }
    
	  // Join array back into string
	  return words.join(' ')
  }

}