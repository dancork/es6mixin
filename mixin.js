module.exports = (...args) => args.reduce((Mixed, Mixin) => Mixin(Mixed), class {})