//! Task 1
//! Create your own resume data in JSON format

const person = {
    "name" : "vivin",
    "mobile no" : "9789689603",
    "education" : "SSLC,HSC,B Com",
    "languages known" : "Tamil, English",
    "hobbies" : "sports,travelling",
    "skills" : "accounting, javascript",
    "award" : "2nd place in volleyball",
    "work" : "1yr experience in auditor office",
    "address" : "RS Puram",
    "city" : "coimbatore",
    "state" : "TamilNadu",
    "country" : "India",
    "certification" : "NPTEL, Mind Control",
    "about" : "Constantly seeking to engage my knowledge to learn something useful and keep challenging myself to be a better performer in accordance to the company’s requirements. Good and quick learner, flexible as per the needs.",
    "interest" : "cricket,volleyball"


};

//! Task 2
//! for the above JSON, iterate over all for loops (for,for in,for of, foreach)

//! For loop
/* const keys = Object.keys(person);
for (let i=0; i<keys.length; i++){
    const key =keys[i];
    console.log(key,person[key]);
}
*/
//! for in loop
/* for(var key in person){
    console.log(person[key]);
}
*/

//! for of loop
/*const b = Object.entries(person);

for(var [key,value] of b){
    console.log(key,value);
}
*/

//! for each
/*const c = Object.entries(person);
c.forEach(([key,value])=> console.log(key,value));
*/