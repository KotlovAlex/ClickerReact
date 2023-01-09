import Cell from "./cell"
import { createField, sumOfField, findEmpty} from "./helper"

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

    sum() {
        return sumOfField(this.field)
    }
};

export default CField