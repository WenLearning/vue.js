new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          alertMe: function(){
            alert("Here's the alert!");
          },
          storeValue: function(event){
            this.value = event.target.value;
          }
        }
    });
