
window.onload = function(){
    var app=new Vue({
        el:"#app",
        data:{
            name:"xsd",
            address:"lucimaorll",
            htmlrendering:"<h>readering<h>",
            htmlparagraph:"<p>write<p>",
            htmlimage:"",
        }
    });
    
    var nav=new Vue({
        el:'#array-rendering',
        data:{
            navname:[{message:' GUEST PAGE '}, {message:' CONTACT '}, {message:' ABOUT '}]
        }
    })
    var appnav = new Vue({
        
        el: '#appnav',
        data: {
         loginType:'unsign',
         navname:[{message:' GUEST PAGE '}, {message:' CONTACT '}, {message:' ABOUT '}]
        },
        methods:{
         changeloginType(){
         let self = this;
         if(self.loginType=='unsign'){
          self.loginType = '';
          self.navname=[{message:'USER PAGE'}, {message:'CONTACT'}, {message:'ABOUT'}]
         }else{
          self.loginType = 'unsign';
          self.navname=[{message:' GUEST PAGE '}, {message:' CONTACT '}, {message:' ABOUT '}]
         }
         }
        }
        });


       
}







