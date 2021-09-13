Vue.component("example-component-test1",{
    template:"<h2>Test<h2>",
});
var globalComponent=new Vue({
    el:"#globalComponent",
    data:{
        message:"HELLO-GLOBAL",
    }
});
var localComponent=new Vue({
    el:"#localComponent",
    components:{
        "example-component-test2":{
            template:"<h2>TEST LOCAL Component<h2>",
        },
        "button-counter":{
            template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
            data: function () {
                return {
                  count: 0
                }
              },
        }
    },
})