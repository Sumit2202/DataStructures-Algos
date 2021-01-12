const length_of_longest_substring = function(arr, k) {
    let start =0,
    map ={},
    result = 0,
    for(let end=0;end<arr.length;end++){
      map[arr[end]] = map[arr[end]]+1 || 1;
      while(end - start + 1 - map['1'] > k){
        map[arr[start]]-=1;
        start+=1;
      }
      result = end - start + 1;
    }
    return result;
  };
  