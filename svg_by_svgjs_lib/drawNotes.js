/* create and svg canvas */
var draw = SVG('canvas')

var rowLength=840
var rowSeperatorLength=180
var partLength=140



function drawNote (x, y, n) {
  draw.circle(20).move(15 + x, 10 + y + (100 - 20*n))
  draw.text("" + n).move(15 + x + 6, y + 6 + (100 - 20*n)).fill('#fff')
}


var r=10
var parts=[
           [[1,2,3,4], [1,2,4,3], [1,3,2,4], [1,3,4,2], [1,4,2,3], [1,4,3,2]], 
           [[2,1,3,4], [2,1,4,3], [2,3,1,4], [2,3,4,1], [2,4,1,2], [2,4,2,1]],
           [[3,1,2,4], [3,1,4,2], [3,2,1,4], [3,2,4,1], [3,4,1,2], [3,4,2,1]],
           [[4,1,2,3], [4,1,3,2], [4,2,1,3], [4,2,3,1], [4,3,1,2], [4,3,2,1]]           
           ]



function drawBackground () {
    
  for (row=0; row < 4; row++) {
    for (y=1; y <= 4; y++) { 
      draw.line(0, 3*r*y + 19*r*row, 18*r*6, 3*r*y + 19*r*row).stroke({ width: 1 })
    }
    for (col=1;col <= 5; col++) { 
      //draw.line(18*r*col, 3*r*y + 19*r*row, 18*r*col, 3*r*y + 19*r*row + 12*r).stroke({ width: 1 })
      draw.line(18*r*col, 19*r*row + 3*r, 18*r*col, 19*r*row + 12*r).stroke({ width: 1 })
    }
  }
    
}


//part=parts[2][3]
//alert(part[0] + "-" + part[1] + "-" + part[2] + "-" + part[3])

function drawPart (row, col) {

  part=parts[row][col]
  //alert(part[0] + "-" + part[1] + "-" + part[2] + "-" + part[3])
  
  for (i=1; i <= 4; i++) {
    
    // delta
    x1=(4*i-1)*r
    y1=15*r - 3*part[i-1]*r
    
    // absolute
    x=18*r*col+x1
    y=19*r*row+y1
    //alert ("x: " + x + "   y: " + y)
    draw.circle(r).move(x-r/2, y-r/2)
  }

}

function drawAll () {
  
  for (row=0; row < 4; row++) {
    for (col=0; col < 6; col++) {
       drawPart(row, col)
    }
  }  

}

drawBackground ()
drawAll ()
