# Rex Render - Support List

- :heavy_check_mark: Supported
- :x: Not Supported - TODO

### rex-for:

- :heavy_check_mark: 1- Support render a simple Array _(Strings, Numbers ie:  `<div rex-for="name of names"> {{name}} <div>`)_
- :heavy_check_mark: 2- Support render an object Array _(i.e: `<div rex-for="client of clients"> {{client.name}} <div>`)_
- :x: 3- Support render an object Array by field name _(i.e: `<div rex-for="client of clients"> {{client['name']}} <div>`)_

### rex-if:

- :x: 1- Support render an HTML element by a var: boolean _(ie: `<div rex-if="isValid"><div>`)_
- :x: 2- Support render an HTML element by a boolean expression _(ie: `<div rex-if="(isValid && clients) ? true : false"><div>`)_