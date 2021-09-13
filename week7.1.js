
window.onload = function(){

var appnav = new Vue({
        
    el: '#appnav',
    data: {
    loginType:'unsign',
    navname:[{message:' GUEST PAGE '}, {message:' CONTACT '}, {message:' ABOUT '}]
    },
    template: "<nav><a v-for='item in navname':key='item.message'>{{item.message}}<div></a><br><p v-if='loginType === 'unsign <label>SIGN</label> <button @click='changeloginType'> LOGIN</button></p><p v-else><br><label>UNSIGN</label><button @click='changeloginType'>LOGOFF</button></p></a>",
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