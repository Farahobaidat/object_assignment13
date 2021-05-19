let info="John,Dorian,TML,CSS,JS,83,56,91,8595 Fairground St.,Dublin,GA,6052834#Perry,Cox,HTML,CSS,JS,81,54,94,,,,5717021#Bob,Kelso,HTML,CSS,JS,73,81,71,8533 Riverside Street,,OK,6925288#Chris,Turk,HTML,CSS,JS,95,69,67,,,,5557148#John,Becker,HTML,CSS,JS,84,92,70,6 Glenridge Drive,Avon,,6925288#Fraiser,Crane,HTML,CSS,JS,62,82,69,,,,#Niles,Crane,HTML,CSS,JS,95,71,81,923 Shore Court,Apple Valley,CA,#Roz,Doyle,HTML,CSS,JS,84,62,100,,,,#Harvey,Specter,HTML,CSS,JS,89,55,100,660 Linda St.,Howard Beach,NY,#Mike,Ross,HTML,CSS,JS,86,46,78,,,,";
function detalisStudent(strring){
    let arrayinfo=strring.split("#");
    let objc={firstName:"",lastName:"",courses:[{title:"",grade:""},{title:"",grade:""},{title:"",grade:""}],
    address:{street:"",city:"",state:""},phone:""};
    let newArray=[],newArray2=[],newArray1=[];
  arrayinfo.map(function sam(item){
    newArray2=item.split(",");
                    newArray.push(newArray2);
                    newArray2=[];
                });
newArray.map(function sort(a){
    [objc.firstName,objc.lastName]=a;
    [,,objc.courses[0].title,objc.courses[1].title,objc.courses[2].title]=a;
    [,,,,,objc.courses[0].grade,objc.courses[1].grade,objc.courses[2].grade]=a;
    [,,,,,,,,objc.address.street,objc.address.city,objc.address.state,objc.phone]=a;
    newArray1.push(objc);
    objc={firstName:"", lastName:"",courses:[{title:"",grade:""},{title:"",grade:""},{title:"",grade:""}],
    address:{street:"",city:"",state:""},phone:""};
})
function tonull(arra){
    return arra.map(function nu(a){ if(a.address.street==""&&a.address.city==""&&a.address.state==""){return a.address="N/A",a}
    else if(a.address.street==""){return delete a.address.street,a}
else if(a.address.city==""){return delete a.address.city,a}
else if(a.address.state==""){return delete a.address.state,a}}),
arra.map(value => {return (value.phone=="")?value.phone="N/A":value.phone,value})
}
function calcavg(array){
    function avg(arrofob){
       return avgrage=(arrofob.reduce((sum,int)=>sum+Number(int.grade),0))/arrofob.length;
      
    }
return array.map(value =>{value.avg=avg(value.courses),value});
}
function topstudent(array){
   return topstu=array.filter(value =>{if(value.avg>=80){return value}})
}
function topstudenstring(){
    let summ=`Top Student:`;
   topstudent(newArray1).map(function summation(value){
    m=`Full Name:${value.firstName+" "+value.lastName} \n Address:${value.address.street?value.address.street:""+" "+value.address.city?value.address.city:""+" "+value.address.state?value.address.state:""} \n Phone#:${value.phone} \n Courses: \n HTML:${value.courses[0].grade} \n CSS:${value.courses[1].grade} \n JS:${value.courses[2].grade} \n Average:${value.avg}`;
return summ+="\n"+m;
})
    return summ;
}
topstudent(newArray1);
tonull(newArray1);
calcavg(newArray1);
 return topstudenstring();
// return topstudent(newArray1).join("\n");
// return newArray1;
// return lastlast();
// return summ;
}
console.log(detalisStudent(info));