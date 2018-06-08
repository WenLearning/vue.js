new Vue({
  el: "#app",
  data: {
    title: "Default title"
  },
  methods: {
    changeTitle: function(event){
      this.title = event.target.value;
    }
  }
})
