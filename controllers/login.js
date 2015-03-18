import Ember from 'ember';

var LoginController = Ember.ObjectController.extend({
	
	actions:{

        save: function (){
        
            var password=this.get('inputpassword');
        	var email=this.get('inputemail');
            var validPassword = null;
            var self = this;

            this.store.find('user').then(function(users){
                users.forEach(function(user){
                    console.log(user);
                    if (email === user.get('email')) {
                        validPassword = user.get('password');
                        if (password === validPassword) {
                            alert('Welcome Back!');           
                            self.set('isLogged', true);
                            self.set('userID', user.get('id'));
                            self.transitionToRoute('sidemenu');
                        }else{
                            alert('Wrong password!');
                        }
                    }
                });
                if (!validPassword) {
                    alert('No such user!');
                }
            });
        },

        newUser:function(){
            this.transitionToRoute('createuser');
        }
    },
	
});
export default LoginController;