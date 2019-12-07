class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let buts = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let output = []
    let arrOfStr = string.split(" ")
    for (let n = 0; n < arrOfStr.length; n++) {
      if (n == 0) {
        output.push(this.capitalize(arrOfStr[n]))
      } else {
        if ( buts.includes(arrOfStr[n])) {
          output.push(arrOfStr[n])
        } else {
          output.push(this.capitalize(arrOfStr[n]))
        }
      }
    }
    return output.join(" ")
  }

}