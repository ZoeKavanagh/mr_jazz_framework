# Mr_Jaz-s_DeathNoteApp

## writing doubles and using them

```
var double = stuntDouble(doublename, [method1, method2, method3, ...],
                        [result1, result2, result3, ...])
```

Example

```
var plane = stuntDouble('plane', ['land','takeOff'], ['true','false'])
```

```
console.log(plane.land())
// prints true

console.log(plane.takeOff())
// prints false
```

## feature testPass

```
feature(feature_name,function(){
  scenario(scenario_name,function(){
    fillIn(id, content)
    click(id)
    hasContent(content)
    })
  })
```
Put view.html page inside src folder and all spec files in the spec folder include the following at the bottom of your body, babajaz.js and any spec files underneath that

```
<script src='../babajaz.js'></script>
<script src='../spec/Featurespecs.js'></script>
