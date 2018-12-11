/* create and svg canvas */
var draw = SVG('canvas')

var rowLength=840
var rowSeperatorLength=180
var partLength=140


function drawRowBackground (rowNo) {
    
  for (var i=1;i <= 4; i++) { 
    draw.line(0, rowSeperatorLength * rowNo + 20 + 20*i, rowLength, rowSeperatorLength * rowNo + 20 + 20*i).stroke({ width: 1 })
  }
    
  // part separator
  for (var i=1;i < 6; i++) { 
    draw.line(partLength*i, rowSeperatorLength * rowNo + 40, partLength*i, rowSeperatorLength * rowNo + 100).stroke({ width: 1 })
  }
    
}

function drawNote (x, y, n) {
  draw.circle(20).move(15 + x, 10 + y + (100 - 20*n))
  draw.text("" + n).move(15 + x + 6, y + 6 + (100 - 20*n)).fill('#fff')
}

function drawPart (x, y, n1, n2, n3, n4) {
  drawNote(x,y,n1)
  drawNote(x+30,y,n2)
  drawNote(x+60,y,n3)
  drawNote(x+90,y,n4)
}

function drawRow0 () {
  
  y=0
  drawRowBackground (0)
  
  x=0
  drawPart(x,y,1,2,3,4)
  x=x+partLength
  drawPart(x,y,1,2,4,3)
  x=x+partLength
  drawPart(x,y,1,3,2,4)
  x=x+partLength
  drawPart(x,y,1,3,4,2)
  x=x+partLength
  drawPart(x,y,1,4,2,3)
  x=x+partLength
  drawPart(x,y,1,4,3,2)
}

function drawRow1 () {
  
  y=y+rowSeperatorLength
  drawRowBackground (1)
  
  x=0
  drawPart(x,y,2,1,3,4)
  x=x+partLength
  drawPart(x,y,2,1,4,3)
  x=x+partLength
  drawPart(x,y,2,3,1,4)
  x=x+partLength
  drawPart(x,y,2,3,4,1)
  x=x+partLength
  drawPart(x,y,2,4,1,3)
  x=x+partLength
  drawPart(x,y,2,4,3,1)
}

function drawRow2 () {
  
  y=y+rowSeperatorLength
  drawRowBackground (2)
  
  x=0
  drawPart(x,y,3,1,2,4)
  x=x+partLength
  drawPart(x,y,3,1,4,2)
  x=x+partLength
  drawPart(x,y,3,2,1,4)
  x=x+partLength
  drawPart(x,y,3,2,4,1)
  x=x+partLength
  drawPart(x,y,3,4,1,2)
  x=x+partLength
  drawPart(x,y,3,4,2,1)
}

function drawRow3 () {
  
  y=y+rowSeperatorLength
  drawRowBackground (3)
  
  x=0
  drawPart(x,y,4,1,2,3)
  x=x+partLength
  drawPart(x,y,4,1,3,2)
  x=x+partLength
  drawPart(x,y,4,2,1,3)
  x=x+partLength
  drawPart(x,y,4,2,3,1)
  x=x+partLength
  drawPart(x,y,4,3,1,2)
  x=x+partLength
  drawPart(x,y,4,3,2,1)
}


drawRow0 ()
drawRow1 ()
drawRow2 ()
drawRow3 ()
