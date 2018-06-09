# Repo for course Vue JS 2 - The Complete Guide(incl. Vue Router & Vuex)

## CheatSheet

### Basic Structure
```
Example:
new Vue({
  el: "<css selector>",
  data: {
    ...<object with key and value(string)>...
  },
  methods: {
    // Any call to strings in data needs to be prefixed with this.
    ...<object with key and value(string or function that returns a string)>...
  }
})
```

### String Interpolation
- `{{}}` interpolations for strings. Inject into HTML templates(doesn't work
  with attributes):
  ```
  Example:
  <div id="test">
    <p>{{name}}</p>
  </div>

  <script>
    new Vue({
        el: "test",
        data: {
          name: "My Name"
        }
    });
  </script>
  ```
### Attributes
- `v-bind:<attr>="<data>"` directive allows Vue.js to inject attribute from strings defined
  in `data` and/or `methods` sections in Vue.js
  ```
  Example:
    <div id="test">
      <input v-bind:value="name">
    </div>

    <script>
      new Vue({
        el: "test",
        data: {
          // name above will be replaced by "My name"
          name: "My name"
        }
      })
    </script>
  ```
### Events
- `v-on:<event>="<function>(paramters)"` directive allows Vue.js to bind an event to a certain element.
  Once you have customized arguments, you can use $event to pass the event object into methods.
  ```
  Example:
    <div id="test">
      <button v-on:click="hello($event)">
    </div>

    <script>
      new Vue({
        el: "test",
        methods: {
          hello: function(event){
            alert("hello");
          }
        }
      })
    </script>
    ```
### Event modifiers
- Modify events that are currently bounded to elements so it can exhibit different behavior
  ```
  Example:
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

  <div id="app">
    <button v-on:click="incr($event)">Click me</button>
    <p>{{counter}}</p>
    <p v-on:mousemove="updateCoord">
      coordinates: {{x}} / {{y}}
      - <span v-on:mousemove.stop="">DEAD SPOT</span>
    </p>
  </div>

  new Vue({
  	el: "#app",
    data: {
    	x: 0,
      y: 0,
    	counter: 0
    },
    methods: {
    	incr: function(event){
      	this.counter += 2;
        console.log(event);
      },
      updateCoord: function(event){
      	this.x = event.clientX;
        this.y = event.clientY;
      }
    }
  })
  ```
### Two way binding
- Two way binding allows a field to:
  1. fetch default value from `data`
  2. allow changes of the field be reflected on other places where that
     particular `data` was referred
- Two way binding directive: `v-model="<data>"`
  ```
  Example:
  ...<script> for vue js...
  <div id="app">
    <input type="text" v-model="name">
    <p>{{name}}</p?
  </div>

  <script>
    new Vue({
      el: "#app",
      data: {
        name: "My Name"
      }
    });
  </script>
  ```
