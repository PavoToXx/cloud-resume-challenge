const API_URL = "https://fg1jfmdws4.execute-api.us-east-1.amazonaws.com/visits";
// ⚠️ Reemplaza con TU URL de API Gateway

async function getVisits() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        document.getElementById("contador").innerText = data.visits;
    } catch (error) {
        document.getElementById("contador").innerText = "N/A";
        console.error("Error:", error);
    }
}

// Llama la función cuando carga la página
getVisits();

document.querySelectorAll('.proyecto-media img').forEach(img => {
    img.addEventListener('click', function() {
        window.open(this.src, '_blank');
    });
});