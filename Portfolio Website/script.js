// Array used to store the recommendations 
let recommendationsList = [
    {
        name: "John Doe",
        recommendation: "Jack Robinson is an exceptional professional. His skills and dedication are unmatched, and he always delivers beyond expectations."
    },
    {
        name: "Jane Smith",
        recommendation: "Working with Jack was a pleasure. His problem-solving skills and technical expertise are top-notch."
    },
    {
        name: "Michael Brown",
        recommendation: "Jack's ability to adapt and provide innovative solutions is truly inspiring. Highly recommend him for any project."
    }
];

// Function to display the recommendations
function displayRecommendations() {
    const recommendationListContainer = document.getElementById('recommendationList');
    const recommendations = document.querySelector('.recommendation-cards');
    
    recommendations.innerHTML = ''; // Clears current recommendations

    recommendationsList.forEach((rec) => {
        const recommendationCard = document.createElement('div');
        recommendationCard.classList.add('recommendation-card');

        const h3 = document.createElement('h3');
        h3.textContent = rec.name;

        const p = document.createElement('p');
        p.textContent = `"${rec.recommendation}"`;

        recommendationCard.appendChild(h3);
        recommendationCard.appendChild(p);

        recommendations.appendChild(recommendationCard);
    });
}

// Event listener for the form submission
document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value;
    const recommendation = document.getElementById('recommendation').value;

    // Add the new recommendation to the recommendations list
    recommendationsList.push({ name, recommendation });

    // Display the updated list of recommendations
    displayRecommendations();

    // Resets the form
    document.getElementById('recommendationForm').reset();

    // Optionally, show a confirmation message
    alert("Thank you for your recommendation!");
});

displayRecommendations();

