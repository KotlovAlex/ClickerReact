import { valueToColor, readbleValue } from "./helper";

class Cell {
    constructor() {
        this.color = null
        this.value = null
    }

    
    changeValue() {
        if (this.value === null) {
            this.value = 1
            this.setColor()
        }
        else {
            this.value *= 2
            this.setColor()
        }
        
    }
    
    setColor() {
        this.color = valueToColor(this.value)
    }

    readble() {
        return readbleValue(this.value)
    }
};

export default Cell;