function listArrayItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    //console.log(i + 1, arr[i])
  }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log('Found the', match, 'at', i)
    } else {
      console.log('---No match found at', i)
    }
  }
}

//letterFinder("test", "t")