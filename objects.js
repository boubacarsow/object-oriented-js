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

var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

console.log(userOne.name);