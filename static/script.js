var bolt = null;

function setUpBolt() {
  console.log("Setting up Bolt");
  try {
    let deviceName = document.getElementById("bolt_id").value;
    let deviceKey = document.getElementById("api_key").value;
    return boltApi.Devices.add(deviceName, deviceKey);
  } catch (err) {
    alert("Device is Offline");
  }
}

function executeTaskOnBolt(pin, state) {
  if (window.bolt == null) {
    window.bolt = setUpBolt();
  }
  bolt.Digital.write({
    pin: pin,
    state: state
  });

}

const bulbEvents = document.querySelector('#bulb');
bulbEvents.addEventListener("click", function(event) {
  console.log(event);
  var status = document.querySelector(".bulb_status").innerHTML;
  var bulbStatus = document.querySelector(".bulb_status");
  if (status === "OFF") {
    executeTaskOnBolt(0, 'HIGH');
    // document.getElementById("bulbImg").src = "static/Images/bulbOn1.jpg";
    bulbStatus.innerHTML = "ON";
    bulbStatus.style.color = "green";
  } else {
    executeTaskOnBolt(0, 'LOW');
    // document.getElementById("bulbImg").src = "static/Images/bulbOff1.jpg";
    bulbStatus.innerHTML = "OFF";
    bulbStatus.style.color = "red";

  }
});

const fanEvents = document.querySelector('#fan');
fanEvents.addEventListener("click", function(event) {
  var status = document.querySelector(".fan_status").innerHTML;
  var fanStatus = document.querySelector(".fan_status");

  if (status === "OFF") {
    executeTaskOnBolt(1, 'HIGH');
    fanStatus.innerHTML = "ON";
    fanStatus.style.color = "green";
  } else {
    executeTaskOnBolt(1, 'LOW');
    fanStatus.innerHTML = "OFF";
    fanStatus.style.color = "red";
  }
});

const exhaustEvents = document.querySelector('#tempCtrl');
exhaustEvents.addEventListener("click", function(event) {
  var status = document.querySelector(".exhaust_status").innerHTML;
  var exhaustStatus = document.querySelector(".exhaust_status");

  if (status === "OFF") {
    executeTaskOnBolt(2, 'HIGH');
    exhaustStatus.innerHTML = "ON";
    exhaustStatus.style.color = "green";
  } else {
    executeTaskOnBolt(2, 'LOW');
    exhaustStatus.innerHTML = "OFF";
    exhaustStatus.style.color = "red";
  }
  });
