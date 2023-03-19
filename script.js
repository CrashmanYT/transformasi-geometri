function translasi() {
    let koordAwalX = Number.parseFloat(document.getElementById("koordAwalX").value)
    let koordAwalY = Number.parseFloat(document.getElementById("koordAwalY").value)

    let transX = Number.parseFloat(document.getElementById("transX").value)
    let transY = Number.parseFloat(document.getElementById("transY").value)


    let koordAkhirX = document.getElementById("koordAkhirX")
    let koordAkhirY = document.getElementById("koordAkhirY")

    koordAkhirX.value = koordAwalX + transX
    koordAkhirY.value = koordAwalY + transY


}