class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }

  static titleize(string) {
    let strSplit = string.split(' ')
    let titleFirst = strSplit[0]
    const skips = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newArr = []
    newArr.push(this.capitalize(titleFirst))

    let titleRest = strSplit.slice(1)
    titleRest.forEach(w => {
      if (skips.includes(w)) {
        newArr.push(w)
      } else {
        newArr.push(this.capitalize(w))
      }
    })
    return newArr.join(' ')
  }
}
