function submitForm() {
    // Get form elements
    const form = document.getElementById('diabetesForm');
    const formData = new FormData(form);

    // Convert form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Display the JSON data (you can send it to a server or perform other actions)
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = JSON.stringify(jsonData, null, 2);
    console.log(jsonData);
}
// Update age value
document.getElementById('age').addEventListener('input', function() {
    document.getElementById('ageValue').textContent = this.value;
});

// Update general health value
document.getElementById('generalHealth').addEventListener('input', function() {
    document.getElementById('generalHealthValue').textContent = this.value;
});

// Update mental health value
document.getElementById('mentalHealth').addEventListener('input', function() {
    document.getElementById('mentalHealthValue').textContent = this.value;
});

// Update physical health value
document.getElementById('physicalHealth').addEventListener('input', function() {
    document.getElementById('physicalHealthValue').textContent = this.value;
});