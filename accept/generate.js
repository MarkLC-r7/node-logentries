
module.exports = function(log,prefix) {

  var levels = log.levels

  var levelarr = []

  for( var lev in levels ) {
    levelarr[ levels[lev] ] = lev
  }

  function entry(i) {
    if( i < 10 ) {
      var lev = levelarr[Math.floor(Math.random()*levelarr.length)]
      var datastr = prefix+i
      console.log(datastr)
      log.log(lev,datastr)

      setTimeout(function(){
        entry(i+1)
      },500*Math.random())
    }
    else {
      console.log('end')
      log.end()
    }
  }
  entry(0)

}
