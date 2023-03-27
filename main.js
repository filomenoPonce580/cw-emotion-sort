function sortEmotions(arr, order){
  const keyNums = {
    '1': ":D",
    '2': ":)",
    '3': ":|",
    '4': ":(",
    '5': "T_T"
  }
  
    const keySmiles = {
    ":D": '1',
    ":)": '2',
    ":|": '3',
    ":(": '4',
    "T_T": '5'
  }
  
  let emoteToNums = arr.map((emotion)=>{
      for(key in keySmiles){
        return keySmiles[emotion]
      }       
    })

  if(order === true){
    return emoteToNums.sort().map((number)=>{
        for(key in keyNums){
          return keyNums[number]
        }       
    })
  }else{
    return emoteToNums
      .sort((a,b)=>b-a)
      .map((number)=>{
        for(key in keyNums){
          return keyNums[number]
        }       
    })
  }
}


/*

better! 

function sortEmotions(arr, order){
  const emotions = { ':D': 1, ':)': 2, ':|': 3, ':(': 4, 'T_T': 5 }
  arr = arr.sort((a, b) => emotions[a] - emotions[b]);
  return order && arr || arr.reverse();
}


*/
