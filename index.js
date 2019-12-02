class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    let arr = string.split(' ')
    let smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if (i === 0) {
          newArr.push(this.capitalize(arr[i]))
        } else {
          if (smallWords.includes(arr[i])){
            newArr.push(arr[i])
          }else {
            newArr.push(this.capitalize(arr[i]))
          }
        }
    }
    return newArr.join(' ')
  }
}