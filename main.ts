input.onButtonPressed(Button.A, function () {
    sumar = A + 1
    basic.showNumber(sumar)
})
input.onButtonPressed(Button.AB, function () {
    texto += 1
})
input.onButtonPressed(Button.B, function () {
    restar = B - 1
    basic.showNumber(restar)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("hola")
})
let restar = 0
let sumar = 0
let B = 0
let A = 0
A = randint(1, 5)
B = randint(1, 10)
let texto: number = "hola"
