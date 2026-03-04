// Fetch visitor count from API Gateway
const API_ENDPOINT = 'YOUR_API_GATEWAY_ENDPOINT_HERE'; // Replace with your API Gateway URL

async function updateVisitorCount() {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Update the visitor count in the DOM
        const visitorCountElement = document.getElementById('visitor-count');
        if (visitorCountElement) {
            visitorCountElement.textContent = data.count || 0;
        }
        
        console.log('Visitor count updated:', data.count);
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        const visitorCountElement = document.getElementById('visitor-count');
        if (visitorCountElement) {
            visitorCountElement.textContent = 'Error';
        }
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateVisitorCount);
