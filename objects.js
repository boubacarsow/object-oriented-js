// // create user one
// var userOneEmail = 'ryu@ninjas.com';
// var userOneName = 'Ruy';
// var userOneFriends = ['Yoshi'];

// // create user two
// var userTwoEmail = 'yoshi@mariocorp.com';
// var userTwoName = 'Yoshi';
// var userTwoFriends = ['Ryu', 'Mario'];

// // create user three
// var userThreeEmail = 'mario@mariocorp.com';
// var userThreeName = 'Mario';
// var userThreeFriends = ['Yoshi'];

// function login(email){
//     console.log(email, 'is now online');
// }

// function logout(email){
//     console.log(email, 'has logged out');
// }

// function logFriends(friends){
//     friends.forEach(friend => {
//         console.log(friend);
//     });
// }

// login(userOneEmail);

// var userOne = {
//     email: 'ryu@ninjas.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// userOne.name = 'Yoshi';

// var userOne = {
//     email: 'ryu@ninjas.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// userOne.name = 'Yoshi';

// var userTwo = {
//     email: 'ryu@ninjas.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// userTwo.name = 'Yoshi';

// var userThree = {
//     email: 'ryu@ninjas.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// userThree.name = 'Yoshi';

// var userFour = new user()

// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;

//     }
//     login(){
//         console.log(this.email, 'just logged in');
//         return this;
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now', this.score);
//         return this;
//     }
// }

// class Admin extends User {
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email !=user.email;
//         })

//     }

// }

// var userOne = new User('ryu@ninjas.com', 'Ryu');
// var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
// var admin = new Admin('shaun@ninjas.com', 'shaun');


// var users = [userOne, userTwo, admin];

// //admin.deleteUser(userOne);
// userOne.deleteUser(userTwo);

// console.log(users);

// userOne.login().updateScore().updateScore().logout();

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
}

User.prototype.login = function(){
    this.online = true;
    onsole.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    onsole.log(this.email, 'has logged out');
}

function Admin(...args){
    User.apply(this, [this, args]);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
    users = users.filter(User => {
        return userOne.email != userOne.email;
    })
};

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas', 'Shaun');

var users = [userOne, userTwo, admin];

console.log(admin);
// userTwo.login();