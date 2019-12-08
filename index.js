class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }
  static titleize(string){
    let splitString = string.split(" ")
    let firstWord = splitString[0]
    let newArr = []
    const offLimits = ["a", "an", "but", "of", "and", "for", "at", "by", "from", "the"]
    let wordsAfterIndexZero = splitString.slice(1)
    // console.log(wordsAfterIndexZero)
    newArr.push(this.capitalize(firstWord))
    wordsAfterIndexZero.forEach(word => {
        if (offLimits.includes(word)) {
            newArr.push(word)
        }else {
            let capitalizeWord = this.capitalize(word)
            newArr.push(capitalizeWord)
        }
    })
   
    return newArr.join(" ")
    // console.log(newArr)
  }
}

Formatter.titleize("where the wild things are")