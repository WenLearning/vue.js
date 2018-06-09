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
# Computed property
- Computed property allows you to only update certain properties that related
  to the property
- For example, if we have two buttons that updates two separated counter, one
  would certainly want only to execute functions that only related to that
  particular counter. In methods, it will run every time no matter the method
  changes the counter or not.
  - Computer property, on the other hand, will only execute IFF the particular
    counter got touched
  ```
  Example:
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

  <div id="app">
    <button v-on:click="incr">Increase First</button>
    <button v-on:click="incr2">Increase Second</button>
    <p>Counter: {{counter}} | {{counter2}}</p>
    <!-- Computed property is called as property instead of as methods -->
    <p>Result: {{result()}} | {{cachedResult}}</p>
  </div>

  new Vue({
  	el: "#app",
    data: {
    	counter: 0,
      counter2: 0
    },
    computed: {
      # this will run only counter got updated, counter2's update won't matter
    	cachedResult: function(){
      	console.log("cached");
        return this.counter > 1 ? "> 1" : "<= 1";
      }
    },
    methods: {
      # will update counter
    	incr: function(){
      	this.counter++;
      },
      # will update counter2
      incr2: function(){
      	this.counter2++;
      },
      # This will run no matter which counter got updated
      result: function(){
      	console.log("run everytime");
      	return this.counter > 1 ? "> 1" : "<= 1";
      }
    }
  })
  ```
