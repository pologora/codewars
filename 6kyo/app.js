String.prototype.isUpperCase = function () {
  return this + '' === this.toLocaleUpperCase();
};

console.log('HI'.isUpperCase());
