import { createField, createTestField, sumOfField } from "./helper"

class CField {
    constructor(field) {
        this.field = field || createTestField()
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