if(String.prototype.nolanize == undefined) {
  String.prototype.nolanize = function() {
    var that = this.toUpperCase();
    var chars = that.split('');

    return chars.join(' ');
  };
}