const str1="Anjali";
const str2='kumari';
const str3=`hii eveyone`;
//the third one the more commonly used nowadays.
//because if you change the line in first twos it will show error but not in third one.
console.log(str1,str2,str3);
const day=23;
const str4=`hii everyone today is ${day}`;
console.log(str4);
console.log(str4.length);
console.log(str4[1]);
//str[2]='d' you cannot do this because string is primitive and its immutable.
console.log(str4.toUpperCase())//for converting to upper case.
console.log(str4.indexOf('eve'));
console.log(str4.indexOf('evp'));
console.log(str4.includes('ev'));
// const str = `Hello Coder Army Coder`;

// console.log(str.substring(2,5));

// const a = "Rohit";
// const b = "Negi";
// const c = a+" "+b;
// console.log(c);

// console.log(24+"Rohit");
// console.log(24+"Rohit"+10);
// console.log(24+30+"Rohit");

// const str = `Hello Coder Army Coder`;

// console.log(str.replaceAll("ode",'iam'));

// const user = "  anjali ";
// console.log(user.trim());

// const names = "Rohit Mohit Suraj Rohan Anjali";

// console.log(names.split(" "))
// console.log(names.split(","))

// const now = new Date();

// console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());


// Local time chal rha
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getSeconds());


// days: Mon-tue(1 based)
// Month: 0 1

// year month date hour minute second millisecond
// const now = new Date(2025,8,20,8,25,16,125);

// console.log(now.toString());


// Timestamp
const now = Date.now();
const dates = new Date(1759275037293);
// console.log(dates.toString());

console.log(dates);
console.log(now);
// 1759272851288: TimeStamp