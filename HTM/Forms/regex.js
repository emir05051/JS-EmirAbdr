let re = /\d+/g;

console.log("1 asdf 234 asdf 12 adsasdf 121"
  .replace(/\d+/g, 
    match => "(" + Math.pow(Number(match), 2) + ")"
));
