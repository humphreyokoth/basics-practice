let string1 = "saveChangesInTheEditor";
function camelcase(s) {
    let count = 1;
    for(let i in s){
     if(s.charAt(i) === s.charAt(i).toUpperCase()){
       count++
     }
    }
    return count
 }
 
 console.log(camelcase("saveChangesInTheEditor"));

 
 function camelcase(s) {
  let count = 1;
  for(let i=0;i<s.length;i++){
      if(s[i] == s[i].toUpperCase()){
          count++;
      }
  }
  return count;
}
console.log(camelcase("saveChangesInTheEditor"));
camelcase('saveChangesInTheEditor');