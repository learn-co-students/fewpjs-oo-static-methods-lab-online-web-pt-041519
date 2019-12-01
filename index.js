class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let stringArray = string.split(" ")
    let formattedWords = []
    let capWord = function (string) {
      return string[0].toUpperCase() + string.slice(1)
    } 
    
    stringArray.forEach ( function(el) {
      if (stringArray.indexOf(el) === 0 ) {
        formattedWords.push(capWord(el))
      }
      else if (exceptions.some( word => word === el) ) {
        formattedWords.push(el)
      }
      else {
        formattedWords.push(capWord(el))
      } // if/else
  
    }) // stringArray forEach
  
      return formattedWords.join(" ")
  }

}