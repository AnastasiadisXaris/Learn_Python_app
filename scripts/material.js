function goBack() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('material_gymnasio.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('material-container');
            data.materials.forEach(material => {
                const item = document.createElement('div');
                item.classList.add('material-item');
                item.innerHTML = `
                    <img src="${material.image}" alt="${material.title}">
                    <h3>${material.title}</h3>
                    <p>${material.description}</p>
                    <button class="more-button">Περισσότερα</button>
                    <ul class="dropdown" style="display: none;"></ul>
                `;
                container.appendChild(item);

                // Προσθήκη event listener για το κουμπί "Περισσότερα"
                const button = item.querySelector('.more-button');
                const dropdown = item.querySelector('.dropdown');
                button.addEventListener('click', () => {
                    toggleDropdown(dropdown, material.resources || {});
                });
            });
        })
        .catch(error => console.error('Error loading material:', error));
});

function toggleDropdown(dropdown, resources) {
    if (!resources || Object.keys(resources).length === 0) {
        dropdown.innerHTML = '<li>Δεν υπάρχει διαθέσιμο υλικό.</li>';
    } else {
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.innerHTML = `
                ${resources.pdf ? `<li><a href="${resources.pdf}" target="_blank">PDF</a></li>` : ''}
                ${resources.video ? `<li><a href="${resources.video}" target="_blank">Βίντεο</a></li>` : ''}
                ${resources.interactive ? `<li><a href="${resources.interactive}" target="_blank">Διαδραστικό Υλικό</a></li>` : ''}
            `;
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('material_lykeio.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('material-container');
            data.materials.forEach(material => {
                const item = document.createElement('div');
                item.classList.add('material-item');
                item.innerHTML = `
                    <img src="${material.image}" alt="${material.title}">
                    <h3>${material.title}</h3>
                    <p>${material.description}</p>
                    <button class="more-button">Περισσότερα</button>
                    <ul class="dropdown" style="display: none;"></ul>
                `;
                container.appendChild(item);

                // Προσθήκη event listener για το κουμπί "Περισσότερα"
                const button = item.querySelector('.more-button');
                const dropdown = item.querySelector('.dropdown');
                button.addEventListener('click', () => {
                    toggleDropdown(dropdown, material.resources || {});
                });
            });
        })
        .catch(error => console.error('Error loading material:', error));
});

function toggleDropdown(dropdown, resources) {
    if (!resources || Object.keys(resources).length === 0) {
        dropdown.innerHTML = '<li>Δεν υπάρχει διαθέσιμο υλικό.</li>';
    } else {
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.innerHTML = `
                ${resources.pdf ? `<li><a href="${resources.pdf}" target="_blank">PDF</a></li>` : ''}
                ${resources.video ? `<li><a href="${resources.video}" target="_blank">Βίντεο</a></li>` : ''}
                ${resources.interactive ? `<li><a href="${resources.interactive}" target="_blank">Διαδραστικό Υλικό</a></li>` : ''}
            `;
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('material_panepistimio.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('material-container');
            data.materials.forEach(material => {
                const item = document.createElement('div');
                item.classList.add('material-item');
                item.innerHTML = `
                    <img src="${material.image}" alt="${material.title}">
                    <h3>${material.title}</h3>
                    <p>${material.description}</p>
                    <button class="more-button">Περισσότερα</button>
                    <ul class="dropdown" style="display: none;"></ul>
                `;
                container.appendChild(item);

                // Προσθήκη event listener για το κουμπί "Περισσότερα"
                const button = item.querySelector('.more-button');
                const dropdown = item.querySelector('.dropdown');
                button.addEventListener('click', () => {
                    toggleDropdown(dropdown, material.resources || {});
                });
            });
        })
        .catch(error => console.error('Error loading material:', error));
});

function toggleDropdown(dropdown, resources) {
    if (!resources || Object.keys(resources).length === 0) {
        dropdown.innerHTML = '<li>Δεν υπάρχει διαθέσιμο υλικό.</li>';
    } else {
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.innerHTML = `
                ${resources.pdf ? `<li><a href="${resources.pdf}" target="_blank">PDF</a></li>` : ''}
                ${resources.video ? `<li><a href="${resources.video}" target="_blank">Βίντεο</a></li>` : ''}
                ${resources.interactive ? `<li><a href="${resources.interactive}" target="_blank">Διαδραστικό Υλικό</a></li>` : ''}
            `;
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }
}