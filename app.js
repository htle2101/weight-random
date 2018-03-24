const WeightRandom = require(`${__dirname}/weightRandom`);
console.log(WeightRandom);

let obj = new WeightRandom({'aaa': 1, 'bbb': 1, 'ccc': 2});
console.log(obj);

console.log(obj.jump());
obj.add({'ddd': 5, 'eee': 6});
console.log(obj);
obj.del('ccc');
console.log(obj);
console.log(obj.jump());
