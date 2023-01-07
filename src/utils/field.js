import { createField, createTestField, sumOfField } from "./helper"

class CField {
    constructor() {
        this.field = createTestField()
    }

    spawn() {
        
    }

    draw() {

    }

    sum() {
        return sumOfField(this.field)
    }
};

export default CField