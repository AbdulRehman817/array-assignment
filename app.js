/*
Assignment 1:
var EmtyArray=[]
document.write(EmtyArray=[])
*/
/*Assignment 2:
var fruits=['Orange', 'Apple','Kiwi']
document.write(fruits[2])
*/

/*
Assignment 3:
var num=[1,2,3,4,5,6]
document.write([2])
*/

/*
Assignment 4:
var arr1=[' a','b']
var arr2=['a','b']
document.write(arr1===arr2 )
document.write(arr1[2]===arr2[2])
*/

/* Assignment 5:
var mix=['a',1,'b',2]
document.write(mix[2])
*/
/* Assignment 6:
var EducationQualification = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M",
  "Phil",
  "PhD",
];
document.write(
  EducationQualification[0] +
    "<br>" +
    EducationQualification[1] +
    "<br>" +
    EducationQualification[2] +
    "<br>" +
    EducationQualification[3] +
    "<br>" +
    EducationQualification[4]
    +'<br>'+EducationQualification[5]
    +'<br>'+EducationQualification[6]
    +'<br>'+EducationQualification[7]
    +'<br>'+EducationQualification[8]
    
);
*/

/* Assignment 7:
var student1=['Micheal']
var student2=['John']
var student3=['Tony']
var ObtainedMarks1=[90+80+78]
var ObtainedMarks2=[95+85+75]
var ObtainedMarks3=[70+90+67]
var Totalmarks=[300]
    var score1=[ObtainedMarks1/Totalmarks*100]
    var score2=[ObtainedMarks2/Totalmarks*100]
    var score3=[ObtainedMarks3/Totalmarks*100]

var result1=['Score of '+student1 +'is:'+ObtainedMarks1+'\n'+'Percentage is:'+score1]
document.write(result1+'%'+'<br>')
var result2=['Score of '+student2 +'is:'+ObtainedMarks2+'\n'+'Percentage is:'+score2]
document.write(result2+'%' +'<br>')
var result3=['Score of '+student3 +'is:'+ObtainedMarks3+'\n'+'Percentage is:'+score3]
document.write(result3 +'%' +'<br>')
*/


/*Assignment8:
var student1=[320,230,480,120]
document.write(student1 +"<br>")

student1.sort()
document.write(student1)
*/
/* Question 9:
var cities=["Karachi","Lahore","Quetta","Islamabad"]
document.write(cities+'<br>')
var selectedcities=["Quetta","Islamabad"]
 document.write(selectedcities)
*/

/* Question 10:
var alphabets=["This", "is", "my "  , "cat"]
document.write(alphabets +"<br>")
document.write(alphabets.join(''))
*/

  /*
/* Question 11:

 var arr1=["Mouse","Keyboard","Printer","Monitor"]
 
 
 document.write("out :",arr1[0]+"<br>")
 document.write("out :",arr1[1] +"<br>")
 document.write("out :",arr1[2] +"<br>")
 document.write("out :",arr1[3] +"<br>")
 */
/*
/* Question 12:

 var arr1=["Mouse","Keyboard","Printer","Monitor"]
 
 arr1.reverse()
 document.write("out :",arr1[0]+"<br>")
 document.write("out :",arr1[1] +"<br>")
 document.write("out :",arr1[2] +"<br>")
 document.write("out :",arr1[3] +"<br>")
 */



var arr1=[]

 var user1=prompt('what color do you need in the beginning')
 var user2=prompt('what color do you need in the end')
 arr1=[user1,user2]
 document.write(arr1) 
 arr1.slice(0,0,'green','blue')
 document.write(arr1)



