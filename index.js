class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(sentence){
    let prep = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let newSentence = [];
    let words = sentence.split(" ");
    let firstWord = words[0];
    newSentence.push(this.capitalize(firstWord));
    let otherWords = words.splice(1);

    otherWords.forEach(word => {
      if (prep.includes(word)){
        newSentence.push(word);
      } else {
        newSentence.push(this.capitalize(word));
      }
    });

    console.log(newSentence.join(" "));
    return newSentence.join(" ");
  }

}