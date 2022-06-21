class Vehicle {
    constructor(Make, Model, Color, Year, Miles)
    this.make= Make;
    this.model= Model;
    this.color= Color;
    this.miles= Miles;
    this.year= Year;
}

start() {
    if (this.key < 0) {
        return this.started = false;
        console.log("insert key");
    } else {
        return this.started = true;
        console.log("turn key to start engine");
    } 
    
}
accelerate() {
    if (this.started) {
        if (this.key > 0) {
            console.log(this.speed += 1);
            this.key = this.key - 1;
        } else {
            console.log("out of fuel.");
            this.stop();
        }
    } else {
        alert("You need to start the engine first.");
    }
}

decelerate() {
    if (this.started) {
        if (this.fuel > 0) {
            if (this.speed > 0) {
                console.log(this.speed -= 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log(this + " has stopped moving");
                this.fuel = this.fuel - 1;
            }
        } else {
            console.log("out of fuel.");
            this.stop();
        }
    } else {
        alert("You need to start the engine first.");
    }
}