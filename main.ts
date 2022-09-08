input.onButtonPressed(Button.A, function () {
    basic.showNumber(número)
    número += 1
})
input.onButtonPressed(Button.AB, function () {
    texto = "Otro"
})
input.onButtonPressed(Button.B, function () {
    número += -1
    basic.showNumber(número)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(texto)
})
let texto = ""
let número = 0
número = 0
texto = "Uno"
