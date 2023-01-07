import { valueToColor, readbleValue } from "./helper";

class Cell {
    constructor(color, value) {
        this.color = color || null
        this.value = value || null
    }

    
    changeValue() {
        this.value *= 2
        this.setColor()
    }

    reset() {
        this.color = null
        this.value = null
    }
    
    setColor() {
        this.color = valueToColor(this.value)
    }

    readble() {
        return readbleValue(this.value)
    }
};

export default Cell;