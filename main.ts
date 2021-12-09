input.onButtonPressed(Button.A, function () {
    radio.sendString("YES")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("NO")
})
radio.setGroup(1)
let canVote = true
basic.forever(function () {
	
})
