const PI = Math.PI

const circleArea = (r) => {
    result = PI * r**2
    return console.log(`Dairenin alanı : ${result}`)
}

const circleCircumference = (r) => {
    result = 2*PI*r
    return console.log(`Dairenin çevresi : ${result}`)
}

module.exports= {
    circleArea,
    circleCircumference
}