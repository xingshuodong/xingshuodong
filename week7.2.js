window.onload = function(){
var testingProps=new Vue({
    el:"#testingProps",
    data:{
        greeting:"hello,how are you",
    },
    components: {
        "greeting-container":{
            props:["greeting"],
            data: function(){
                return{name:"Andrew"};
            },
            template:"<div>{{greeting}}, {{name}}</div>",
        },
    },
})}