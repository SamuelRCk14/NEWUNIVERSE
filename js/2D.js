const diametroTierra = 12742  // 12,742 Km
const diametroLuna = 3474 // 3,474 Km
const lunaPorc = (diametroLuna * 100) / diametroTierra
const distanciaTierraLuna = 384400 //384400 Km

const tierraEscala = 40
const lunaEscala = (lunaPorc * tierraEscala) / 100
const distanciaEscala =(distanciaTierraLuna / diametroTierra) * tierraEscala

const troposfera = (20 / diametroTierra) * tierraEscala
const estratosfera = (50 / diametroTierra) * tierraEscala
const mesosfera = (80 / diametroTierra) * tierraEscala
const termosferaRel = (800 / diametroTierra) * tierraEscala
const exosfera = (10000 / diametroTierra) * tierraEscala


const tierra = document.getElementById('tierra')
const luna =document.getElementById('luna')


console.log (distanciaEscala)
// Tierra

tierra.style.width = tierraEscala + 'px'
tierra.style.height = tierraEscala + 'px'

// Luna

luna.style.width = lunaEscala + 'px'
luna.style.height= lunaEscala + 'px'

// Atmosfera

tierra.style.marginRight = distanciaEscala + 'px'
tierra.style.boxShadow = `
	0 0 0px ${ troposfera }px #FFF,
	0 0 0px ${ estratosfera }px #FFF2,
	0 0 1px ${ mesosfera }px #FFF2, 
	0 0 5px ${ termosferaRel }px #FFF2,  
	0 0 5px ${ exosfera }px #FFF2
	`
	