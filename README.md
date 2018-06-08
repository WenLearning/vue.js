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
- `v-on:<event>="<function>"` directive allows Vue.js to bind an event to a certain element
  ```
  Example:
    <div id="test">
      <button v-on:click="hello">
    </div>

    <script>
      new Vue({
        el: "test",
        methods: {
          hello: function(){
            alert("hello");
          }
        }
      })
    </script>
    ```
