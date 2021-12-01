if (process.env.NODE_ENV === "production") {
    module.exports = require('./CalculateComponent.prod');
} else {
    module.exports = require('./CalculateComponent.dev');
}