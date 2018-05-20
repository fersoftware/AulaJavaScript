const school = "FuçoTEC";
console.log(school.charAt(4)); // T
console.log(school.charAt(8)); // return empty
console.log(school.charCodeAt(3)); // 111  /*CodeASCII*/
console.log(school.indexOf('u')); // 1

console.log(school.substring(1)); // uçoTEC
console.log(school.substring(0,3)); // Fuç

console.log("School ".concat(school).concat("!")); //School FuçoTEC!
console.log("School " +  school + "!"); //School FuçoTEC!

console.log(school.replace('o','a')); // FuçaTEC
console.log(school.replace(/\w/,'a')); // auçoTEC  /*REGEX*/
console.log('Ana,Maria,Pedro'.split(',')); // [ 'Ana', 'Maria', 'Pedro' ]
console.log('Ana,Maria,Pedro'.split(/,/)); // [ 'Ana', 'Maria', 'Pedro' ] /*REGEX*/

