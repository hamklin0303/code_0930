let degrees = 0
input.onGesture(Gesture.Shake, function () {
    degrees = randint(80, 100)
    if (degrees >= 90) {
        basic.showNumber(degrees)
        basic.showString("A+!!")
    } else if (degrees >= 85) {
        basic.showNumber(degrees)
        basic.showString("A")
    } else if (degrees >= 80) {
        basic.showNumber(degrees)
        basic.showString("A-")
    } else {
    	
    }
})
basic.forever(function () {
	
})
