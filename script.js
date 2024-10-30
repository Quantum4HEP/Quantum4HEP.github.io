async function loadHeader() {
    try {
        const response = await fetch("header.html");

        // Check if the file was found
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text();
        document.getElementById("header").innerHTML = data;
        const h3head = document.getElementById("h3head");
        const h3headcopy = document.getElementById("h3head");
        let lastScrollTop = 0;

        window.addEventListener("scroll", function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Add or remove class based on scroll direction
            if (scrollTop > lastScrollTop) {
                header.classList.add("header-small");
            } else if (scrollTop === 0) {
                header.classList.remove("header-small");
            }

            lastScrollTop = scrollTop;
        });
        document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("show");
  });
    } catch (error) {
        console.error("Error loading header:", error);
    }
}

// Call the function to load the header
loadHeader();


async function loadfooter() {
    try {
        const response = await fetch("footer.html");

        // Check if the file was found
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text();
        document.getElementById("footer").innerHTML = data;
    } catch (error) {
        console.error("Error loading footer:", error);
    }
}

// Call the function to load the footer
loadfooter();

