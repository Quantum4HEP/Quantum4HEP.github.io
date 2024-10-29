async function loadHeader() {
    try {
        const response = await fetch("header.html");

        // Check if the file was found
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text();
        document.getElementById("header").innerHTML = data;
    } catch (error) {
        console.error("Error loading header:", error);
    }
}

// Call the function to load the header
loadHeader();