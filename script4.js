function ElectricalAppliance() {
    this.included = false
    this.changeInclude = () => {this.included=!this.included}
}


function SmallElectricalAppliance(name, included, energyConsumption) {
    this.name = name
    this.energyConsumptionSize = 'small'
    this.energyConsumption = energyConsumption
}

SmallElectricalAppliance.prototype = new ElectricalAppliance()

function BigElectricalAppliance(name, included, energyConsumption) {
    this.name = name
    this.energyConsumptionSize = 'large'
    this.energyConsumption = energyConsumption
}

BigElectricalAppliance.prototype = new ElectricalAppliance()

const washingMachine = new BigElectricalAppliance('washingMachine', false, 56)
const lamp = new SmallElectricalAppliance('lamp', true, 14)

function TurnWashingMachine() {
    washingMachine.changeInclude()
    console.log(washingMachine)
}

function TurnLamp() {
    lamp.changeInclude()
    console.log(lamp)
}

function GetVoltage() {
    let voltageMachine = washingMachine.included? washingMachine.energyConsumption : 0
    let voltageLamp = lamp.included? lamp.energyConsumption : 0
    console.log(voltageMachine+voltageLamp)
}

console.log(washingMachine)
console.log(lamp)