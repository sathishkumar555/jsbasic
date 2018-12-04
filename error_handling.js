
function errorhandling(){
    var age=25;
    try{
       // validateVoting(age);
       console.log("try");
       throw 'coming from try';
    }catch(e){
       console.log("catch");
       
        console.log(e);
        return true;
        console.log(2);

    }
    finally{
       console.log("finaly");
       return false;
       console.log(4);
       
    }

    console.log("5");
    
}


errorhandling();


//logic to compare array
var TotalArray=[
    {'id':1,name:"Apple"},
    {'id':2,name:"Ball"},
  
    {'id':5,name:"elephant"}
];

var dbArray=[
    {'id':1,name:"Apple"},
    {'id':3,name:"cat"},
    {'id':4,name:"dog"},
    {'id':5,name:"elephant"}
   
   
];

var chgArray=[
   
    {'id':3,name:"cat"},
    {'id':4,name:"dog"}
    
];
// TotalArray.map(e=>e.type="default")

// // var nochan=TotalArray.filter((e,i)=> e.name==dbArray[i].name ? e.type="no change":e.type)

// let selArrayName=chgArray.map(e=>e.name);
// let dbArrayName=dbArray.map(e=>e.name);


// var daa=dbArrayName.concat(selArrayName);

function remove_duplicates(a, b) {
    var ccc=[];
    for (var i = 0, len = a.length; i < len; i++) { 
        for (var j = 0, len2 = b.length; j < len2; j++) { 
            if (a[i].name === b[j].name) {
               b.splice(j, 1);
               ccc.push(a[i]);
               len2=b.length;
            }

        }
    }
    a.map((d)=>{ return d.operation="delete";})
    
    b.map((d)=>{ return d.operation="insert";})

    ccc.map((ee)=>{ return ee.operation="no change";})
    console.log(b);
    
    console.log(a);
    var output=a.concat(b);
    console.log(output);
    //console.log(ccc);
    

}

remove_duplicates(dbArray,chgArray);

// console.log([...new Set(daa)]);




// console.log(selArrayName);
// selArrayName.map((e,i,arr)=>{
    
// })
    

// console.log(newArray);


// var d=[];
// var outdb=dbArray.map((d,i)=>{
    
//     return d.name==chgArray[i].name ?  dbArray[i].operation="no change" : '';
// })

// console.log(outdb)
// console.log(d)

// let filterHeadData=[];
// dbArray.map((d, i) => {
//     let dbData = chgArray.map((d) => d.name);
    

//     filterHeadData = dbData.reduce((a, b,i) => { debugger
//       if (a.indexOf(chgArray[i].name) < 0) { a.push(chgArray[i]); } return a;
//     }, []);
//     // filterHeadDatas = filterHeadData.slice();
//     // filterHeadData.map((f, i) => {
//     //   if (filterHeadData[i] == filterHeadDatas[i]) {
//     //     finalHeadDataOn[i] = alldata.sort((a,b) => parseInt(b.cnt) - parseInt(a.cnt));
//     //     finalHeadDataOn[i] = alldata.filter((e) => e.hname == filterHeadData[i]);
//     //   }
//     // })
//   })
    
//   console.log(filterHeadData)