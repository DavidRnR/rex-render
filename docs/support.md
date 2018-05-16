# Rex Render - Support List

- [x] Supported
- [ ] Not Supported - TODO

### rex-for:

- [x] 1- Support render a simple Array _(Strings, Numbers ie:  `<div rex-for="name of names"> {{name}} <div>`)_
- [ ] 2- Support render an object Array _(i.e: `<div rex-for="client of clients"> {{client.name}} <div>`)_
- [ ] 3- Support render an object Array by field name _(i.e: `<div rex-for="client of clients"> {{client['name']}} <div>`)_

### rex-if:

- [ ] 1- Support render an HTML element by a var: boolean _(ie: `<div rex-if="isValid"><div>`)_
- [ ] 2- Support render an HTML element by a boolean expression _(ie: `<div rex-if="(isValid && clients) ? true : false"><div>`)_