class Formatter {
  //add static methods here
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\d -]+/g, '')
  }

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static titleize(string) {
    let words = string.split(' ')
    let array = []
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    
    for(let i = 0; i < words.length; i++)
      if (i == 0) {
        array.push(this.capitalize(words[i])) 
      } else {
        if (exceptions.includes(words[i])) {
          array.push(words[i])
        } else {
          array.push(this.capitalize(words[i]))
          }
        }
    return array.join(' ')
  }
}