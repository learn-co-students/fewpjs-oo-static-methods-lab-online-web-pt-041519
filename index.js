class Formatter {
  static capitalize(string) {
    let splitString = string.split("")
    let upper = splitString[0].toUpperCase()
    let final = splitString.slice(1)
    final.unshift(upper)
    return final.join("")
  }

  static sanitize(secondString) {
    let regex = /[^0-9a-zA-Z  '-]/g
    let newString = secondString.replace(regex, '')
    return newString
  }

  static titleize(string) {
    let array = string.toLowerCase().split(" ")
    let matchedRegex = /(\bthe)|(an\b)|(but)|(of)|(and)|(\bfor\b)|(at)|(by)|(from)|(\ba\b)/g
    let finalArray = []

    for(let i = 0; i < array.length; i++) {
      if (!array[i].match(matchedRegex) || i === 0) {
      let firstUpperLetter = array[i].split("")[0].toUpperCase()
      let endOfWord = array[i].split("").slice(1).join("")
      finalArray.push(firstUpperLetter.concat(endOfWord))
    } else {
      let matched = array[i]
      finalArray.push(matched)
    }
  }
  return finalArray.join(" ")
}
}