/**    button Reference
* mGridArray[i][k] = 1 LIGHT IS ON
* mGridArray[i][k] = 0 LIGHT IS OUT
*/
  var mGridArray = [];//36 length array created in init() that makes up the 5x5 board
  var mLightsOn;
  var Dimension = 6;
  //initializes mGridArray so it is known which lights start on.
  function init() {
    mLightsOn = 0;
    mGridArray = new Array(Dimension);//mGridArray is 1D
    //make mGridArray 2d
  for(let i = 0; i < mGridArray.length; i++)
  {
    mGridArray[i]= new Array(Dimension);
    for(let k=0; k < mGridArray[i].length; k++)
    {
      let num = i * mGridArray.length + k;
      mGridArray[i][k]= getRandomInt(2);
      if (mGridArray[i][k] == 0) {//1 signifies out
        document.getElementById("button"+num).style.background="black";
      } else {
        mLightsOn++;
        document.getElementById("button"+num).style.background="yellow";
      }
      console.log("mGridArray[" + i + " ][" + k + "] has a value of: " + mGridArray[i][k]);
    }//end k for loop
  }//end for loop
  if(mLightsOn == Dimension * Dimension || mLightsOn == 0)
  {
    init();
  }
  console.log("New Game with lights on value of: " + mLightsOn);
}//end init


  //flips the button color from off to on or vice versa
  function ChangeButton(x, y)
  {
    if(mLightsOn == Dimension * Dimension)
    {
      console.log("The game is finished: "+ mLightsOn);
      //Game is Finished don't change any lights
    }else{
      //creates the button number: ie button 5 is [1][0] so 1*5 +0 =5
      let num = x * mGridArray.length + y;
      if(mGridArray[x][y] == 1){
        document.getElementById("button"+num).style.background="black";
        mGridArray[x][y] = 0;
        mLightsOn--;
      } else if(mGridArray[x][y] == 0) {
        document.getElementById("button"+num).style.background="yellow";
        mGridArray[x][y] = 1;
        mLightsOn++;
      } else {
        console.log("mGridArray[" + x + " ][" + y + "] has a value that is not 0 or 1: " + mGridArray[x][y]);
      }
    }
    if(mLightsOn==Dimension * Dimension){//celebratory green
      for(i =0 ; i< mGridArray.length; i++)
      {
        for(k = 0; k < mGridArray[i].length; k++)
        {
          let num = i * mGridArray.length + k;
          document.getElementById("button"+num).style.background="green";
        }
      }
    }
  }



  //when a button is clicked it calls ChangeButton on the appropriate buttons
  function Switch(x, y)
  {
    ChangeButton(x, y);
    // console.log("Middle: " + mGridArray[x][y]);
    if(x != 0)//Top changes
    {
      ChangeButton(x - 1, y);
            // console.log("Top: " + mGridArray[x][y]);
    }
    if(y != mGridArray.length-1)//Right Changes
    {
      ChangeButton(x, y + 1);
      // console.log("Right: " + mGridArray[x][y+1]);
    }
    if(y != 0)//Left changes
    {
      ChangeButton(x, y - 1);
            // console.log("Left: " + mGridArray[x][y-1]);
    }
    if(x != mGridArray.length-1)//Bottom changes
    {
      ChangeButton(x + 1, y);
            // console.log("Bottom: " + mGridArray[x+1][y]);
    }
  }
//pulled a source for random number b/c I looked up how to do it, and thought anything I made would be extremely similar.
//source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  //row 1
  document.getElementById("button0").onclick = function() {Switch(0,0)};
  document.getElementById("button1").onclick = function() {Switch(0,1)};
  document.getElementById("button2").onclick = function() {Switch(0,2)};
  document.getElementById("button3").onclick = function() {Switch(0,3)};
  document.getElementById("button4").onclick = function() {Switch(0,4)};
  document.getElementById("button5").onclick = function() {Switch(0,5)};
  //row 2
  document.getElementById("button6").onclick = function() {Switch(1,0)};
  document.getElementById("button7").onclick = function() {Switch(1,1)};
  document.getElementById("button8").onclick = function() {Switch(1,2)};
  document.getElementById("button9").onclick = function() {Switch(1,3)};
  document.getElementById("button10").onclick = function() {Switch(1,4)};
  document.getElementById("button11").onclick = function() {Switch(1,5)};
  //row 3
  document.getElementById("button12").onclick = function() {Switch(2,0)};
  document.getElementById("button13").onclick = function() {Switch(2,1)};
  document.getElementById("button14").onclick = function() {Switch(2,2)};
  document.getElementById("button15").onclick = function() {Switch(2,3)};
  document.getElementById("button16").onclick = function() {Switch(2,4)};
  document.getElementById("button17").onclick = function() {Switch(2,5)};
  //row 4
  document.getElementById("button18").onclick = function() {Switch(3,0)};
  document.getElementById("button19").onclick = function() {Switch(3,1)};
  document.getElementById("button20").onclick = function() {Switch(3,2)};
  document.getElementById("button21").onclick = function() {Switch(3,3)};
  document.getElementById("button22").onclick = function() {Switch(3,4)};
  document.getElementById("button23").onclick = function() {Switch(3,5)};
  //row 5
  document.getElementById("button24").onclick = function() {Switch(4,0)};
  document.getElementById("button25").onclick = function() {Switch(4,1)};
  document.getElementById("button26").onclick = function() {Switch(4,2)};
  document.getElementById("button27").onclick = function() {Switch(4,3)};
  document.getElementById("button28").onclick = function() {Switch(4,4)};
  document.getElementById("button29").onclick = function() {Switch(4,5)};
  //row 6
  document.getElementById("button30").onclick = function() {Switch(5,0)};
  document.getElementById("button31").onclick = function() {Switch(5,1)};
  document.getElementById("button32").onclick = function() {Switch(5,2)};
  document.getElementById("button33").onclick = function() {Switch(5,3)};
  document.getElementById("button34").onclick = function() {Switch(5,4)};
  document.getElementById("button35").onclick = function() {Switch(5,5)};
