class ElectricalAppliance {
    constructor(name, energyConsumption) {
        this.included = false
        this.changeInclude = () => {this.included=!this.included}
        this.name = name
        this.energyConsumption = energyConsumption
    }

}


class SmallElectricalAppliance extends ElectricalAppliance {
    energyConsumptionSize = 'small'
}

SmallElectricalAppliance.prototype = new ElectricalAppliance()

class BigElectricalAppliance extends ElectricalAppliance {
     energyConsumptionSize = 'large'
}

BigElectricalAppliance.prototype = new ElectricalAppliance()

const washingMachine = new BigElectricalAppliance('washingMachine', 56)
const lamp = new SmallElectricalAppliance('lamp',  14)

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