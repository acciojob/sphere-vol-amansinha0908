function volume_sphere() {
    let radius = document.getElementById("radius").value;
    radius = parseFloat(radius);

    let volume;

    // Validate input
    if (isNaN(radius) || radius < 0) {
        volume = NaN;  // assign NaN if invalid
    } else {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volume = parseFloat(volume.toFixed(4)); // ensure numeric, rounded
    }

    // Display in output field (string)
    document.getElementById("volume").value = volume;

    return false; // prevent form refresh
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
