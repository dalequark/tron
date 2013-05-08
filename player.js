function player(name, up, down, left, right){

  var name = name;
  player.population++;
  
  var up = up;
  var down = down;
  var left = left;
  var right = right;
  
  this.isDown = function(keyCode) {
    return this._pressed[keyCode];
  }
  
  this.onKeydown = function(event) {
    this._pressed[event.keyCode] = true;
  }
  
  this.onKeyup = function(event) {
    delete this._pressed[event.keyCode];
  }
  
  
  
  
}
