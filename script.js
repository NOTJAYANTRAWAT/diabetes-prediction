function submitForm() {
    // Get form elements
    const form = document.getElementById('diabetesForm');
    const formData = new FormData(form);

    // Convert form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Display the JSON data (you can remove this if not needed)
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = JSON.stringify(jsonData, null, 2);

    // Send JSON data to the server
    fetch('http://127.0.0.1:5000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
        // Display the server response in the results container
        resultContainer.textContent = JSON.stringify(data, null, 2);
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
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