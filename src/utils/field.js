import Cell from "./cell"
import { createField, createTestField, sumOfField, findEmpty} from "./helper"

class CField {
    constructor(field) {
        this.field = field || createField()
    }

    spawn(value) {
        const [empty, r, c] = findEmpty(this.field)
        if (empty) {
            this.field[r][c] = new Cell(null, value)
            this.field[r][c].setColor()
        }
    }

    draw() {

    }

    sum() {
        return sumOfField(this.field)
    }
};

export default CField