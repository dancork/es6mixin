# es6mixin

A tiny library for writing mixins for es6 classes

#### Writing A Mixin

```
const myMixin = Base => class extends Base {
  ...
```

#### Using Mixins

```
const mixin = require('es6mixin')

class Foo extends mixin(myMixin, ...) {
  ...
```