function Aritmetics() {
  this.lastOp = "";

  this.add = function(a,b) { this.lastOp = "Add"; return a + b; }
  this.sub = function(a,b) { this.lastOp = "Sub"; return a - b; }
  this.mul = function(a,b) { this.lastOp = "Mul"; return a * b; }
  this.div = function(a,b) { this.lastOp = "Div"; return a / b; }

  this.render = function(to) {
    to.innerHTML = this.lastOp;
  };
};

module.exports = Aritmetics;