var arr=process.argv;
  if(arr.length==2 || arr[2]=='-h'){
    return;
  }
  var obj={};
  for(var i in arr){
    var len=arr.length-1;
    if(arr[i].indexOf('-')==0){
      var n=parseInt(i);
      if(n==len) {obj[arr[i].slice(1)]=true; break}
      obj[arr[i].slice(1)]=arr[n+1].indexOf('-')==0?true:arr[n+1];

    }
  }
  return obj;
};
