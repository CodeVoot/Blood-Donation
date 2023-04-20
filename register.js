function register()
{
    var name1 = document.myform.name1.value;
    var name2 = document.myform.name2.value;   
    var number1 = document.myform.number1.value;
    var number2 = document.myform.number2.value;
    var group = document.myform.group.value;
    var last = document.myform.last.value;
    var contact = document.myform.contact.value;
    var email = document.myform.email.value;
    var address1 = document.myform.address1.value;
    var address2 = document.myform.address2.value;
    var address3 = document.myform.address3.value;
    var address4 = document.myform.address4.value;
    

    if(name1==null ||  name1=="" )
    {
        alert("Please enter your first name");
    }
   else if(name2==null ||  name2=="" )
    {
        alert("Please enter your last name");
    }
   else if(number1<18 ||  number1>50)
   {
       alert("please enter your age in between 18-50");
   }
   else if(number2==null || number2=="")
   {
       alert("please enter your DOB");
   }
   else if(group==null || group=="")
   {
       alert("Please enter your Blood Group");
   }
   else if(last==null || last=="")
   {
       alert("Please Tell Exact Date when u last donate your blood");
   }
   else if(contact.length<10 || contact.length>10)
   {
       alert("enter your valid contact number");
   }
   else if(email==null || email=="")
   {
       alert("enter your email id");
   }

   else if(address1==null || address1=="")
   {
       alert("enter your stree address");
   }
   else if(address2==null || address2=="")
   {
       alert("enter your City");
   }
   else if(address3==null || address3=="")
   {
       alert("enter your State");
   }
   else if(address4==null || address4=="")
   {
       alert("enter your Country");
   }
   else
    {
             alert("HI");
    }

}