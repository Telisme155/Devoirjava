


let value = 200;
let valueb = 40;
let taxe = 12;

console.log(value-valueb +taxe) 

let setInterval= 100;
let valence =30;
console.log(100+30)


let code = 250;
let codepromotionnel = true;

let remise = 50;
let cout = 300;

let code1 = code >= 250 || codepromotionnel //
let code2 = remise >= 50 || codepromotionnel //
let code3 = cout >= 300 || codepromotionnel//
console.log(codepromotionnel)


let lot = [ "jean", "jacques","27", "pierre" ];
console.log(lot[ 2 ]) 


//

let list = [ "galanz","valise","charge" ];
list [ 4 ]="vera";//
console.log(list);
list.length = list.length -1 //
 console.log(list)

//

let objA ={ name:"Louis" };
let objB = objA;
objB.promade = 40;

let objc = {... objA };
objc.promade = 60;
console.log(objc);
console.log(objA);//




 
let lista =["meliada","Rosemond","tesme"  ];
//let listb = lista;
let listb = [ ... lista ]
listb[ 3 ] = "newstock";
 
console.log(listb);
console.log(lista)



let objg = { nom : "noulemploye" };
 let objh = objg
 objg.company = 20;

 console.log(objg)

 let objl ={... objg  };
 objl.job = "metier";
 console.log (objl)
 console.log(objg)





 
 //
 let book ={ 
    title : "je batirai mon eglise",
    auteur : "Alfred kuen",
    year: 2000,
    genre: "theologiens",
  };

 book.kellia = "marques"
console.log(book);

delete book.kellia;
console.log(book)
