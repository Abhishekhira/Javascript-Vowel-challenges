console.log("vowels ending")


function checkVowel(str) {
    var count=0;
    let vowels=["a","e","i","o","u"]
  for (const char of str.toLowerCase()) {
     if (vowels.includes(char)) {
        return true;
     }
  }   
}
console.log(checkVowel('abhishek'))
