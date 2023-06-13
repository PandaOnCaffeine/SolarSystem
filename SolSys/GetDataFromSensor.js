// Wait for the HTML document to load
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the sensor data from the server
    setInterval(getSensorData, 1000); // Call the function every second
  
    function getSensorData() {
      // Create a new XMLHttpRequest object
      var xhr = new XMLHttpRequest();
  
      // Set up the request
      xhr.open('GET', '/sensor_data', true); // Replace 'sensor_data.php' with the server-side script URL
  
      // Set up the response handler
      xhr.onload = function() {
        if (xhr.status === 200) {
          // Update the sensor value in the HTML element
          document.getElementById('sensorValue').textContent = xhr.responseText;
        }
      };
  
      // Send the request
      xhr.send();
    }
  });
  