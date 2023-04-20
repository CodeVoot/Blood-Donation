function abc()
{
    var name = document.myform.name.value;
    var password = document.myform.password.value;
    if(name==null || name=="")
      {
          alert("Please enter your login id and password");
          
      }
      else if(password.length<=8)
      {
          alert("password at least 8 chaarcters");
          
      }
      else
      {
          alert("You have successfully logged in");
      }

}
 
function def()
{
    var name1 = document.myform1.name1.value;
    var name2 = document.myform1.name2.value;
    var name3 = document.myform1.name3.value;
    var name4 = document.myform1.name4.value;
    var number1 = document.myform1.number1.value;
    var number2 = document.myform1.number2.value;
    if(name1==null || name1=="")
    {
        alert("PLease enter your home");
    }
    else if(name2==null || name2=="")
    {
        alert("PLease enter your Gender");
    }
    else if(name3==null || name3=="")
    {
        alert("PLease enter your Locality");
    }
    else if(name4==null || name4=="")
    {
        alert("PLease enter your Blood group");
    }
    else if(number1.length>2 || number1.length<2)
    {
        alert("PLease enter your age in between 18-50 ");
    }
    else if(number2.length>10 || number2.length<10)
    {
        alert("PLease enter your valid Contact Number");
    }
    else
    {
        alert("You got a message when we find a donor");
    }



}