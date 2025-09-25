function volume_sphere() {
    //Write your code here
	 let radius = document.getElementById("radius").value;

    // Convert to number
    radius = parseFloat(radius);

    // Validate input
    if (isNaN(radius) || radius < 0) {
        alert("Please enter a valid non-negative number for the radius.");
        return false; // prevent form submit
    }

    // Calculate volume: (4/3) * π * r³
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    volume = volume.toFixed(4);

    // Display in output field
    document.getElementById("volume").value = volume;

    return false; // prevent page reload

	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
