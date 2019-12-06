class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    return string.split(" ").map( (w, i) => {
      const doNotCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      if (!doNotCap.includes(w) || i === 0) { 
        return this.capitalize(w) 
      } else { return w }
    }).join(" ")
  }

}