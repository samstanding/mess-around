console.log('what up!');

/*
function capMe (arr) {

var nameOne = arr.shift();
var nameTwo = arr[1];
var nameThree = arr[2];
var nameFour = arr[3];

var capOne = nameOne[0].toUpperCase();
//var capTwo = nameTwo.
//var capThree = nameThree.
//var capFour = nameFour.



console.log(capOne + nameOne);
  }

  capMe(['jim', 'max', 'steve', 'harold']);
*/

function filterArray(arr) {
  var number = 5;
  function isNumber (input) {
    if (typeof input == 'number' ) {
      return input;
    }
    var filtered = arr.filter(isNumber(arr));
  return filtered;
}
}
console.log(filterArray([1, 2, "a", "b",]));


/*var myFoods = ['oysters', 'carne asada tacos', 'chicken gyro', 'ribs', 'pork lo mein',
 'soup dumplings', 'chicken mahktani', 'shishito peppers', 'jerk chicken', 'seared ahi tuna'];

 var restuarantFoods = ['fish & chips', 'oysters', 'seared ahi tuna', 'salmon', 'swordfish',
'bacalao', 'chilean sea bass' ];

function foodMatch (array1, array2) {
  for (var i = 0; i < array1.length; i++ ) {
    for (var j = 0; j <array2.length; j++ ) {
      if (array1[i] === array2[j]) {
        console.log('yup! we got your ' + array1[i]);
      } else
      console.log("too bad! They don't have my favorite foods here!");
    }
  }
}
foodMatch(myFoods, restuarantFoods);
function keysAndValues(obj) {
  var keys = Object.keys(obj);
  var values = keys. map(function (key) {return obj[key]; } );
console.log(keys,  values);
}
keysAndValues({a: 1, b: 2, c: 3});

function checkPalindrome(string) {
var removeChar = string.replace(/[^A-Z0-9]/gi, "").toLowerCase();
console.log(removeChar);
  var pal = removeChar.split('').reverse().join('');
  console.log(pal);
  if (removeChar === pal) {
    return true;
  } else
    return false;
}
console.log(checkPalindrome('Neuquen'));
function getAbsSum(arr) {
  var abs = arr.map (function (n) {
    return Math.abs(n);
  });
  return abs.reduce( function (a, b) {
    return a + b;
  }, 0);
}
console.log(getAbsSum([5, -10, 16, -16]));

function highLow(str) {
  var str2 = str.split(' ');
  var maxMin;
  var maxMin = str2.reduce (function (a, b) {return Math.max(a, b);});
  maxMin += str2.reduce (function (a, b) {return Math.min(a, b);});
return maxMin;
}
console.log(highLow('4 7 10 -2'));
var number = (busStops) => busStops.reduce((num, [on, off]) => num + on - off, 0);
console.log(number([[10,0],[3,5],[5,8]]));
*/


function towerBuilder(nFloors) {
  // build here
  var count = 0;
  var floors = [
    ' * ',
];
  var newFloors = '**';
  function buildFloors () {
  floors.push(floors[floors.length-1]);
  return floors + newFloors;
  }
  while (nFloors >= count) {
    buildFloors();
    count++;
  }
  return floors;
}
console.log(towerBuilder(2));

//function basicOp(operation, value1, value2) {
  // Code
//return eval('value1 operation value2');
//}
//console.log(basicOp('+', 4, 7));

//from eloquent javascript chpt 4
/*
function arrayToList (arr) {
  	var list = null;
	for (var i = arr.length -1; i >= 0; i--) {
   list = {value: arr[i], rest: list};
    }
return list;
}

function listToArray (arr) {
 	var array1 = [];
  	for (var node = list; node; node = node.rest) {
     array1.push(node.value);
    }
  return array1;
}

function prepend (element, obj) {
 var list = null;
  list = {value: element, rest: obj};
  return list;
}

function nth (obj, num) {
  for (var node = list; node; node = node.rest) {
  return node.value[num];
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));


function likes(names) {
  var num = names.length-2;
  if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return names[0] + ' likes this';
  } else if (names.length === 2){
    return names[0] + ' and ' + names[1] + ' like this';
  } else if (names.length === 3) {
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  } else if (names.length > 3) {
    return names[0] +  ', ' + names[1] + ' and ' + num +' others like this';
  }
}
console.log(likes(['hallie', 'fox mulder', 'lily', 'jack', 'gene yee', 'carl carlsbad']));

var hwPartner = {
  firstName : 'Arick',
  lastName : 'Schaibly',
  placeOfResidence : 'Farmington',
  pets : 2,
  beenSkydiving: true,
  findsSkyDivingSpooky: true
};
hwPartner.funToWorkWith = false;
hwPartner.responsive = false;
hwPartner.shitsGiven = 0;
console.log(hwPartner);

function openOrSenior(data){
  // ...
  var status = [];
  for (var i = 0; i <data.length; i++){
    if (data[i][0] > 54 && data[i][1] > 7) {
      status.push('Senior');
    } else
    status.push('Open');
  }
  return status;
}
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
function isObject (val1) {
  if (typeof val1 == 'object')
  return true;
  else return false;
}
var testObject = {
  cat1 : 'foxMulder',
  cat2 : 'sculy',
  cat3 : 'kitty'
};
var testObject2 = {
  value: 1,
  shirt: 3,
  cat: 9
};
function testObjLength (val1, val2) {
  if (Object.keys(testObject).length == Object.keys(val2).length)
   return true;
   else return false;
}
console.log(testObjLength (testObject, testObject2));
function isPangram(string){
   var alMatch = string.toLowerCase().match(/[a-z]/gi);
   alMatch = alMatch.filter(function (item, pos) {
     return alMatch.indexOf(item) == pos;
   });
   if (alMatch.length === 26) {
     return true;
   } else {
     return false;
   }
}
*/
function isPangram(string){
  return "abcdefghijklmnopqrstuvwxyz".split('').every(function(e) {
    return string.toLowerCase().indexOf(e) >= 0;
  });
}


console.log(isPangram('The uick brown fox jumps over the lazy dog'));

function loop (string) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  alpha = alpha.split('');
  var arr = [];
  for (var i = 0; i<alpha.length; i++) {
    for (var j = 0; j<string.length; j++) {
      if (alpha[i] == string[j]) {
        arr.push(string[j]);
    }
}
}  arr = arr.filter(function (item, pos) {
  return arr.indexOf(item) == pos;
});
console.log(arr, alpha);
if (arr == alpha) {
  return true;
} else
return false;
}
console.log(loop('The quick brown fox jumps over the lazy dog'));

function electricDrill (safety, battery, purpose, bit) {
  this.safety = safety;
  this.battery = battery;
  this.purpose = purpose;
  this.bit = bit;
  this.operate = function () {
    if (safety === 'on') {
      console.log( "drill isn't doing anything");
    }
    else if (battery === 0) {
      console.log( 'charge drill');
    } else if(safety!== 'on' && battery > 0 && purpose === 'screw') {
      console.log('drill says: drrrrrr screwing something in');
    } else if (safety!== 'on' && battery > 0 &&  purpose === 'unscrew') {
      console.log( 'drill says: drrrrr unscrewing something');
    }
};
}

var drilly = new electricDrill ('o', 14, 'screw', 'a bit');
