import Ember from 'ember';

var LoginController = Ember.ObjectController.extend({
	
	actions:{

        save: function (){
        
        var password=this.get('inputpassword');
    	var email=this.get('inputemail');
        
        var users = this.get('type.FIXTURES');
        var validPassword = null;
         console.log(users);
        for (var i = users.length - 1; i >= 0; i--) {
            // users[i]
            if (email === users[i].email) {
                validPassword = users[i].password;
                if (password === validPassword) {
                    alert('Welcome Back!');
                    this.set('isLogged', true);
					this.set('userID', users[i].id);
                    var loggedUserStatus = 'type.FIXTURES.'+i+'.status';
                    this.set(loggedUserStatus, true);
                    this.transitionToRoute('sidemenu');
                    
            }
                else{
                    alert('Wrong password!');
                }
                break;
            }
        }
        if (!validPassword) {
            
            alert('No such user!');
        }
    	// if(email === this.get('email')){
    	// 	this.set('isLogged', true);
            
     //        alert(this.get('name'));

    	// }
    	// else{
    	// 	alert("Invalid!");
     //        console.log(users);

    	// }
    }
    },
	
});
export default LoginController;