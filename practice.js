// /*
// let x
// x = Number("56")
// console.log(x,typeof x);

// x = x + x
// console.log(x);

// x = x - ""
// console.log(x, typeof x); //if we use minus and double coloun then it shows o/p number


// x = x + "" ; //if we use plus and " " then it is a string
// console.log(x, typeof x); 
// */

// {
// let global = "this is a global variable"
// console.log(global)
// }
// console.log(global)18118

/*sync function and return

// const result = Greet()
// function Greet() {
//     return function()
//     {console.log("Welcome to club")}
// }
// result();

*/

/*
//callback func with setTimeout

console.log('hi step-1')

function callback()
{console.log()}
setTimeout(callback,  );

function callback()
{console.log('This is printing another 1 sec')}
setTimeout(callback, 5000);

console.log('Trying to achieve callback step-2')
*/

function parcel3()
{console.log('I am on 3rd floor to deliver parcel')};

function parcel2(parcel3)
{console.log('I am on 2nd floor to deliver parcel')
parcel3()};

function parcel1(parcel2)
{console.log('I am on 1st floor to deliver parcel')};
parcel2(parcel3);

function parcel0(parcel1)
{console.log('I am on the ground floor waiting for lift')}

function parcelEnd(parcel0){
    setTimeout(()=>{parcel0(parcel1);
        console.log('Returning back to ground floor by lift')
    },1000);
}
parcelEnd(parcel0);

console.log('Lets start the delivering parcels')// your code goes here
