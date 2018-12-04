function longest_palindrome(s){
    
    var maxLen = 0,
    maxStr = '';
    
    for(var i=0; i < s.length; i++) 
    {
    var subs = s.substr(i, s.length);
    
    for(var j=subs.length; j>=0; j--) 
    {
    var subString = subs.substr(0, j);
    if (subString.length <= 1)
    continue;
        var repeat=subString.split("").reverse().join("");
    if (repeat==subString)
    {
    if (subString.length > maxLen) 
    {
    maxLen = subString.length;
    maxStr = subString;
    }
    }
    }
    }
    
    return maxStr;
    }