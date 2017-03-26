
    var mainText = document.getElementById("mainText");
    var submitBtn = document.getElementById("submitBtn");
    var company = {name: "", money: "",  };
    
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