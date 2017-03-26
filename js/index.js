
    var mainText = document.getElementById("mainText");
    var submitBtn = document.getElementById("submitBtn");
    var email = document.getElementById('email').value;
    
    var company = {email: "", website: "", money: "", location: "", start: "", end: ""};
    
    function submitClick()
    {
        var firebaseRef = firebase.database().ref();
        var messageText = mainText.value;
        firebaseRef.push().set(messageText);
    }
    
    vart rootRef = firebase.database().ref().child("Users"];
    rootRef.on("child_added", snap => {
    alert(snap.val());
    });