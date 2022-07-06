class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return(string.replace(/[^a-z0-9+ '-]+/gi, ''));
  }

  static titleize(string){
    let splitString = string.split(' ');
    let newSplit=[];
    for(let i=0; i<splitString.length; i++){

      if(splitString[i]!=='the'|| splitString[i] !== 'a' || splitString[i]!=='an'|| splitString[i]!=='but'||splitString[i]!=='of'||splitString[i]!=='and' || splitString[i]!=='for' || splitString[i]!=='at'|| splitString[i]!=='by' || splitString[i]!=='from'){
        // console.log(splitString[i])
        newSplit.push(splitString[i].charAt(0).toUpperCase()+splitString[i].slice(1));
        // console.log(newSplit)
      } 
      // else {
      //   console.log
      //   newSplit.push(splitString[i].charAt(0).toLowerCase()+splitString[i].slice(1));
      // }

    }
    console.log(newSplit)
  }

}
