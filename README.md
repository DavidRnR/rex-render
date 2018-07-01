# Rex Render
## Template Render Project

**Iterate an array:** 

var myNames = ["Nico", "Lucas", "Alfredo"];

```
<div rex-for="name of myNames">
            Name: {{name}}
</div>
```

```
<div>
            Name: Nico
</div>
<div>
            Name: Lucas
</div>
<div>
            Name: Alfredo
</div>
```

**Iterate an Object Array:** 

var persons = [
    {name: "David", age: 33},
    {name: "Lucas", age: 28},
    {name: "Jorge", age: 56}
];

```
<div rex-for="person of persons">
            Name: {{person.name}}
            Age: {{person.age}}
</div>
```

```
<div>
            Name: David
            Age: 33
</div>
<div>
            Name: Lucas
            Age: 28
</div>
<div>
            Name: Jorge
            Age: 56
</div>
```