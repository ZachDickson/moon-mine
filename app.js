
var countTotal = 0
var clickPower = 1
var autoUpgradesTotal = 0

var upgrades = {
  pickaxe: {
    cost: 10,
    modifier: 2,
    amount: 0
  },
  minecart: {
    cost: 50,
    modifier: 5,
    amount: 0
  },
  extraMiner: {
    cost: 250,
    modifier: 10,
    amount: 0
  },
  excavator: {
    cost: 1000,
    modifier: 50,
    amount: 0
  }
}






//function for click to add 1 click + upgrades
function clicker() {
  countTotal += clickPower
  document.getElementById("click-counter").textContent = countTotal
}

function addPickaxe() {
  if (countTotal >= upgrades.pickaxe.cost) {
    countTotal -= upgrades.pickaxe.cost
    clickPower += upgrades.pickaxe.modifier
    upgrades.pickaxe.cost += 10
    upgrades.pickaxe.amount++
    document.getElementById("pickaxe-count").textContent = upgrades.pickaxe.amount
    document.getElementById("click-power").textContent = clickPower
    document.getElementById("pickaxe-cost").textContent = upgrades.pickaxe.cost
    updateCountTotal()
    return clickPower
  } else alert("insufficient funds");
}
function addMineCart() {
  if (countTotal >= upgrades.minecart.cost) {
    countTotal -= upgrades.minecart.cost
    clickPower += upgrades.minecart.modifier
    upgrades.minecart.cost += 50
    upgrades.minecart.amount++
    document.getElementById("minecart-count").textContent = upgrades.minecart.amount
    document.getElementById("click-power").textContent = clickPower
    document.getElementById("minecart-cost").textContent = upgrades.minecart.cost
    updateCountTotal()
    return clickPower;
  } else alert("insufficient funds")
}

function addAutoMiner() {
  if (countTotal >= upgrades.extraMiner.cost) {
    countTotal -= upgrades.extraMiner.cost
    autoUpgradesTotal += upgrades.extraMiner.modifier
    upgrades.extraMiner.cost += 250
    upgrades.extraMiner.amount++
    document.getElementById("miner-count").textContent = upgrades.extraMiner.amount
    document.getElementById("gold-per-second").textContent = autoUpgradesTotal
    document.getElementById("miner-cost").textContent = upgrades.extraMiner.cost
    updateCountTotal()
    setInterval(minerTimer, 1000)
    return autoUpgradesTotal
  } else alert("insufficient funds")
}

function autoExcavator() {
  if (countTotal >= upgrades.excavator.cost) {
    countTotal -= upgrades.excavator.cost
    autoUpgradesTotal += upgrades.excavator.modifier
    upgrades.excavator.cost += 1000
    upgrades.excavator.amount++
    document.getElementById("excavator-count").textContent = upgrades.excavator.amount
    document.getElementById("gold-per-second").textContent = autoUpgradesTotal
    document.getElementById("excavator-cost").textContent = upgrades.excavator.cost
    updateCountTotal()
    setInterval(excavatorTimer, 1000)
    return autoUpgradesTotal
  } else alert("insufficient funds")
}

function minerTimer() {
  countTotal += autoUpgradesTotal
  document.getElementById("click-counter").textContent = countTotal
}


function excavatorTimer() {
  countTotal += autoUpgradesTotal
  document.getElementById("click-counter").textContent = countTotal
}

function updateCountTotal() {
  document.getElementById("click-counter").textContent = countTotal
  return countTotal
}