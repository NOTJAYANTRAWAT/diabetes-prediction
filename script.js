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
        const resultMessage = prediction == 1 ? 'Diabetes predicted' : 'No diabetes predicted.';
    
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
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
function submitKidneyForm() {
    // Get form elements
    const form = document.getElementById('kidneyForm');
    const formData = new FormData(form);

    // Convert form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        // Parse the value as an integer for certain fields
        switch (key) {
            case 'Age':
                jsonData[key] = parseInt(value, 10);
                break;
            default:
                jsonData[key] = value;
        }
    });

    // Log that data is being sent for kidney prediction
    console.log('Sending kidney prediction data:', jsonData);

    // Send JSON data to the server for kidney prediction
    fetch('https://jayant-major-kindey-zcyv.onrender.com/predict', {
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
        const prediction = data.predictions[0];
    
        // Display a meaningful message based on the prediction value
        const resultMessage = prediction == 1 ? 'Kidney failure predicted' : 'No kidney failure predicted.';
    
        console.log('Result Message:', resultMessage);
    
        // Set the result message in the result container
        const resultContainer = document.getElementById('kidneyResult');
        resultContainer.textContent = resultMessage;
    })
    .catch(error => console.error('Error:', error));
}

// Update age value for kidney prediction
document.getElementById('kidneyAge').addEventListener('input', function() {
    document.getElementById('kidneyAgeValue').textContent = this.value;
});

// Update blood pressure value for kidney prediction
document.getElementById('bloodPressure').addEventListener('input', function() {
    document.getElementById('bloodPressureValue').textContent = this.value;
});

// Update blood glucose random value for kidney prediction
document.getElementById('bloodGlucoseRandom').addEventListener('input', function() {
    document.getElementById('bloodGlucoseRandomValue').textContent = this.value;
});