class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let capped = [];
    let words = string.split(' ');
    let firstWord = words[0];
    let notFirstWords = words.splice(1);
    capped.push(this.capitalize(firstWord));
    // console.log(this.capitalize(firstWord));
    // console.log(notFirstWords);
    notFirstWords.forEach(word => {
      if (exceptions.includes(word)) {
        capped.push(word);
      } else {
        capped.push(this.capitalize(word));
      }
    });
    console.log(capped.join(' '));
    return capped.join(' ');
  }
}

// Formatter.titleize('wubba lubba dub dub');
Formatter.titleize('They’re just robots, Morty! It’s OK to shoot them! They’re robots!');
