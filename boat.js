//JS Builder pattern
class Boat {
    constructor(length, width, color, masts, engine) {
        this.length = length;
        this.width = width;
        this.color = color;
        this.masts = masts;
        this.engine = engine;
    }

    setLength(length) {
        this.length = length;
        return this;
    }
    setWidth(width) {
        this.width = width;
        return this;
    }
    setColor(color) {
        this.color = color;
        return this;
    }
    setMasts(masts) {
        this.masts = masts;
        return this;
    }
    setEngine(engine) {
        this.engine = engine;
        return this;
    }
}

module.exports = {
    Boat
}