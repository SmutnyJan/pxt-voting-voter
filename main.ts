input.onButtonPressed(Button.A, function () {
    radio.sendValue("YES", control.deviceSerialNumber())
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("NO", control.deviceSerialNumber())
})
radio.setGroup(1)
basic.forever(function () {
	
})
