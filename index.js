class Formatter {
  //add static methods here
  static capitalize(string) {
  	return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
  	let strArr = string.split(' ')
  	let newArr = []
  	strArr.forEach(function(el) {
  		newArr.push(el.replace(/[^A-Za-z0-9-']+/g, ''))
  	})
  	return newArr.join(' ')
  }

  static titleize(string) {
  	let strArr = string.split(' ')
  	let newArr = []
  	let stayLowerCase = ['the', 'a', 'an', 'but', 'of', 'and', 'of', 'for', 'at', 'by', 'from']
  	strArr.map( el => el.toLowerCase())
  	newArr.push(strArr[0].charAt(0).toUpperCase() + strArr[0].slice(1))
  	for (let i = 1; i < strArr.length; i++) {
  		if (!stayLowerCase.includes(strArr[i])) {
  			newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
  		} else {
  			newArr.push(strArr[i])
  		}
  	}
  	return newArr.join(' ')
  }
}