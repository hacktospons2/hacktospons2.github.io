
    
    var rootRef = firebase.database().ref().child("organizers");
    
    rootRef.on("child_added", snap => {
        
        
         var name = snap.child("name").value;
         var email = snap.child("email").value;
         var website = snap.child("website").value;
         var money = snap.child("money").value;
         var place = snap.child("place").value;
         var startDate = snap.child("startDate").value;
         var endDate = snap.child("endDate").value;
  
    $("#table_body").append("<tr><td>" + name + "</td><td>" + email +
         "</td><td>" + website + "</td><td>" + money + "</td><td>" + 
         place + "</td><td>" + startDate + "</td><td>" + endDate);
  
    });
