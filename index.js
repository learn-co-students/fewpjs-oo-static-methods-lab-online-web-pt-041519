class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const prep = ["a" , "an", "but", "of", "and", "for", "at", "from", "by", "the"]
    let s = string.split(" ")
    let firstWord = Formatter.capitalize(s[0])

    let mappedString = s.slice(1).map(word => {
      if (prep.includes(word)) {
        return word
      }
      else 
      return Formatter.capitalize(word)
    })

    const newStr = firstWord + " " + mappedString.join(" ")
    return newStr 
  }

 
}