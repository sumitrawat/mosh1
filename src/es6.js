export const es6=function(){
    console.log('====ES6====');
    LetTest();
    objectEx();
    arrayMap();
}

const LetTest=() => {
    console.log(`Using Var, i is hosted to function scrope ${i}, value is undefined as nothing is assigned`)
    for (var i=0; i<5; i++)
        console.log(`In the loop: ${i}` )
    console.log(`I outside the hoisted: ${i}`);

//'j' is not defined  no-undef --    console.log(`J is declared with let, so will be error outside the loop ${j}`);
    for (let j=0;j<5;j++)
        console.log(`In the loop ${j}`);
//'j' is not defined  no-undef --     console.log(`J is not available once loop is done ${j}`);

    const cannotbeassigned="Const cannot be assigned";
    console.log(`${cannotbeassigned}`);
//Uncaught Error: "cannotbeassigned" is read-only --    cannotbeassigned='assigned';
}


const objectEx=()=>{
    const objOld={
        a:1,
        b:2,
        c:function(){
            console.log(this);
        }
    }

    const newObj={
       printIt(){
           console.log(this)
       }
    }

   objOld.c();

   //function is
   newObj.printIt();

   let printIt=newObj.printIt;
    //this is not bind to anything as it is called as a function and strict mode is on
    //otherwise it will be pointing to windows 
   // undefined
    printIt();
    //binding the this to the window object
    printIt=newObj.printIt.bind(window);
   // prints window
   printIt();
}

const arrayMap =()=>{
    let employees = [{name:"one", isactive:false},
        {name:"two", isactive:true},
        {name:"two", isactive:false}
    ];
    //map returns a new array
    //arrow function with single parameter and one line of code "input => returnvalue"
    console.log(employees.map(employee => `<h2>${employee.name}</h2><h3>${employee.isactive}</h3>`));
    //filter returns a new array on predicate function
    console.log(employees.filter(employee=>employee.isactive==false).map(employee=>`Inactive employee ${employee.name}`));
}
