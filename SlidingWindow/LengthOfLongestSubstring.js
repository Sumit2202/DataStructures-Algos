const length_of_longest_substring = function(str, k) {
    let windowSt = 0,
    hashMap = {},
    result = 0,
    maxReplace = k,
    idxOfFirstReplace = -1;
    for(let windowEnd =0;windowEnd<str.length;windowEnd++){
      if(Object.keys(hashMap).length == 0){
        hashMap[str[windowEnd]] = 0;
      }
      if(!hashMap[str[windowEnd]] && hashMap[str[windowEnd]]!=0){
        if(maxReplace >0){
          if(idxOfFirstReplace == -1){
            idxOfFirstReplace = windowEnd;
          }
          maxReplace-=1;
          hashMap[str[windowSt]]+=1;
        }
        else{
          result = Math.max(result, windowEnd - windowSt)
          maxReplace=k;
          hashMap = {};
          windowSt = idxOfFirstReplace;
          windowEnd = windowSt - 1;
          idxOfFirstReplace = -1;
        }
      }
      else{
        hashMap[str[windowEnd]]+=1;
      }
      if(maxReplace ==0)
          result = Math.max(result, windowEnd - windowSt + 1);
    }
    return result;
    };