function submitForm() {
    // Get form elements
    const form = document.getElementById('diabetesForm');
    const formData = new FormData(form);

    // Convert form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        // Parse the value as an integer for certain fields
        switch (key) {
            case 'Age':
            case 'GenHlth':
            case 'MentHlth':
            case 'PhysHlth':
            case 'Income':
                jsonData[key] = parseInt(value, 10);
                break;
            default:
                jsonData[key] = value;
        }
    });

    // Send JSON data to the server
    fetch('https://capstone-flask.onrender.com/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
        // Log the server response to the console
        console.log('Server Response:', data);
    
        // Extract the prediction value from the server response
        const prediction = data.prediction;
    
        // Display a meaningful message based on the prediction value
        const resultMessage = prediction == 1 ? 'Diabetes detected!' : 'No diabetes detected.';
    
        console.log('Result Message:', resultMessage);
    
        // Set the result message in the result container
        const resultContainer = document.getElementById('result');
        resultContainer.textContent = resultMessage;
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