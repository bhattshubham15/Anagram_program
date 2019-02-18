function String(stra)
{
var array=new Array();
var j=0;
var Lowerchange=stra.toLowerCase();
for(let i of Lowerchange)
    {
      array[j]=i;
      j++;
    }
var local;
for(var i = 0; i < array.length; i++)
    {
for(var j = i + 1; j < array.length; j++)
      {
        if(array[i] > array[j]){
          local = array[i];
          array[i] = array[j];
          array[j] = local;
        }
      }
    }
for(var i=0;i<array.length;i++)
    {
      var strb=strb+ array[i];
    }
    return strb;
  }
var string1=String("cat");
var string2=String("tac");
var length1=string1.length;
var length2=string2.length;
    if(length1==length2)
  {
      if(string1==string2)
      {
        window.alert("Anagram string");
      }
      else 
      {
          window.alert("Not a Anagram");
      }
  }

