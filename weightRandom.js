function WeightRandom(data) {
	this.data = data;
	this.total = Object.values(data).reduce(function (prev, curr) {
		return prev + curr
	});
}

WeightRandom.prototype.add = function(obj) {
	if(!obj) return;
	//return Object.assign(this.data, obj);
	for(var key in obj){
		this.data[key] = obj[key];
		this.total += obj[key];
	}
	return this.data
}

WeightRandom.prototype.del = function(key) {
	this.total -= this.data[key];
	delete this.data[key];
	return this.data;
}

WeightRandom.prototype.jump = function() {
	keys = Object.keys(this.data);
	weights = Object.values(this.data);
	random = Math.random() * this.total;
	for (i = 0; i < weights.length; i++) {
		random -= weights[i];
		if (random < 0) {
			return keys[i]
		}
	}
}

module.exports = WeightRandom;
