<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Todo list</h1>
    <input>
    <button id="add">submit</button>
    <button id="clear">clear</button>
    <ol>
      <li>learn html</li>
      <li>learn js</li>
    </ol>

    <script src="https://www.gstatic.com/firebasejs/3.7.3/firebase.js"></script>
    <script>
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAnHZwfsnuor-V9Nr-r_eTmDDU5KgmRZyo",
        authDomain: "hshacks-7ce1b.firebaseapp.com",
        databaseURL: "https://hshacks-7ce1b.firebaseio.com",
        storageBucket: "hshacks-7ce1b.appspot.com",
        messagingSenderId: "221543141545"
      };
      firebase.initializeApp(config);
    </script>
    <script>
    var list = document.querySelector("ol");
    var input = document.querySelector("input");
    var submit = document.getElementById("add");
    var clear = document.getElementById("clear");

    var database = firebase.database();
    var reference = database.ref();

    // sending
    submit.onclick = function() {
        reference.push(input.value);
        input.value = "";
    };

    input.addEventListener("keyup", function(event) {
      if (event.which == 13) {
        reference.push(input.value);
        input.value = "";
      }
    });

    clear.onclick = function() {
        reference.remove();
    };

    //receiving
    reference.on("value", function(snapshot) {
      var todo = snapshot.val();
      list.innerHTML = "";
      for (var key in todo) {
        var value = todo[key];
        list.innerHTML += '<li>' + value + '</li>';
      }

    })

    </script>
  </body>
</html>