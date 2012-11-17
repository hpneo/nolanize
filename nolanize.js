if (String.prototype.nolanize === void 0) {
  String.prototype.nolanize = function() {
    var that = this.toUpperCase();
    var chars = that.split('');

    return chars.join(' ');
  };
}