class Formatter {

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'-\s]+/g, '');
  }

  static titleize(str) {
    return str.toLowerCase().split(' ').map(word => {
      const noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      if(noCap.indexOf(word) !== -1 && str.startsWith(word) !== true) {
        return word
      } else {
        return (word.charAt(0).toUpperCase() + word.slice(1))
      }
    }).join(' ')
  }

}