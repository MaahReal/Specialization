function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  
  function registeredNa(){
    alert("Thank you for registering!!! It was successfully registered");
  }
  
  function deleteAccount(){
    var data = document.getElementById("data").innerText;
    alert("Are you sure you want to delete " + data + "?");
  }
   function updateAccount(){
    alert("Account Updated");
   }
  
   function login(){
    var pass = document.getElementById("password").value;
    if (pass == "admin") {
      
    };
  
   }
  
  
  