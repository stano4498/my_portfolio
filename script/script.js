function area(length,width){
    return("area is " + length * width)
}
let userlength = prompt("length")
let userwidth = prompt("width")

alert(area(userlength, userwidth))
function perimeter(length, width){
    return("perimeter is " +2*( Number(length) + Number(width )))
}
alert(perimeter(userlength, userwidth))