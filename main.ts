input.onButtonPressed(Button.A, function () {
    radio.sendValue("A", control.deviceSerialNumber())
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("C", control.deviceSerialNumber())
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("B", control.deviceSerialNumber())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendValue("D", control.deviceSerialNumber())
})
radio.setGroup(1)
basic.forever(function () {
	
})
