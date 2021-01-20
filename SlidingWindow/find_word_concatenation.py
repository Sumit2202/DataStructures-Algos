def find_word_concatenation(str, words):
  result_indices = []
  lenOfOneWord = len(words[0])
  totalMatches = len(words) * lenOfOneWord
  currMatched = 0
  st = 0
  map = {};
  
  for word in words:
    for w in word:
      if(w in map):
        map[w] +=1;
      else:
        map[w]=1;
  
  for end in range(len(str)):
    if(str[end] in map):
      map[str[end]]-=1;
      if(map[str[end]] >= 0):
        currMatched+=1;
    
    print(currMatched);
    
    if( end - st + 1 > totalMatches):
      while(end - st + 1 !=lenOfOneWord+1):
        if(str[st] in map):
          map[str[st]]+=1;
          if(map[str[st]] > 0):
            currMatched-=1;
        st+=1;
    
    if(currMatched == totalMatches):
      result_indices.append(st);
  return result_indices;