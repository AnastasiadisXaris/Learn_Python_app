function goBack() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('quizzes_gymnasio.json') // Βεβαιωθείτε ότι η διαδρομή είναι σωστή
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch quizzes: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('quizzes-container');
            if (!container) {
                console.error('Container element not found');
                return;
            }

            // Εμφάνιση μέχρι 10 quiz
            const quizzesToShow = data.quizzes.slice(0, 10); // Εμφανίζει έως 10 quiz
            quizzesToShow.forEach(quiz => {
                const item = document.createElement('div');
                item.classList.add('quizzes-item');
                item.innerHTML = `
                    <img src="${quiz.image}" alt="${quiz.title}">
                    <h3>${quiz.title}</h3>
                    <p>${quiz.description}</p>
                    <button class="more-button">Περισσότερα</button>
                    <ul class="dropdown" style="display: none;"></ul>
                `;
                container.appendChild(item);

                // Προσθήκη λειτουργίας στο κουμπί "Περισσότερα"
                const button = item.querySelector('.more-button');
                const dropdown = item.querySelector('.dropdown');
                button.addEventListener('click', () => {
                    toggleDropdown(dropdown, quiz.resources || {});
                });
            });
        })
        .catch(error => {
            console.error('Error loading quizzes:', error);
            const container = document.getElementById('quizzes-container');
            if (container) {
                container.innerHTML = `<p style="color: red;">Η φόρτωση των quiz απέτυχε. Ελέγξτε τη σύνδεση ή τη διαδρομή του αρχείου.</p>`;
            }
        });
});

// Συνάρτηση για την εμφάνιση των πόρων του quiz
function toggleDropdown(dropdown, resources) {
    if (!resources || Object.keys(resources).length === 0) {
        dropdown.innerHTML = '<li>Δεν υπάρχουν διαθέσιμοι πόροι για αυτό το quiz.</li>';
    } else {
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.innerHTML = `
                ${resources.Quiz_1 ? `<li><a href="${resources.Quiz_1}" target="_blank">Quiz 1</a></li>` : ''}
                ${resources.Quiz_2 ? `<li><a href="${resources.Quiz_2}" target="_blank">Quiz 2</a></li>` : ''}
                ${resources.Quiz_3 ? `<li><a href="${resources.Quiz_3}" target="_blank">Quiz 3</a></li>` : ''}
                ${resources.Quiz_4 ? `<li><a href="${resources.Quiz_4}" target="_blank">Quiz 4</a></li>` : ''}
                ${resources.Quiz_5 ? `<li><a href="${resources.Quiz_5}" target="_blank">Quiz 5</a></li>` : ''}
                ${resources.Quiz_6 ? `<li><a href="${resources.Quiz_6}" target="_blank">Quiz 6</a></li>` : ''}
            `;
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('quizzes_lykeio.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('quizzes-container');
            data.quizzes.forEach(quizzes => {
                const item = document.createElement('div');
                item.classList.add('quizzes-item');
                item.innerHTML = `
                    <img src="${quizzes.image}" alt="${quizzes.title}">
                    <h3>${quizzes.title}</h3>
                    <p>${quizzes.description}</p>
                    <button class="more-button">Περισσότερα</button>
                    <ul class="dropdown" style="display: none;"></ul>
                `;
                container.appendChild(item);

              // Προσθήκη event listener για το κουμπί "Περισσότερα"
                const button = item.querySelector('.more-button');
                const dropdown = item.querySelector('.dropdown');
                button.addEventListener('click', () => {
                    toggleDropdown(dropdown, quizzes.resources || {});
                });
            });
        })
        .catch(error => console.error('Error loading quizzes:', error));
});

function toggleDropdown(dropdown, resources) {
    if (!resources || Object.keys(resources).length === 0) {
        dropdown.innerHTML = '<li>Δεν υπάρχουν διαθέσιμα quizz.</li>';
    } else {
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.innerHTML = `
                ${resources.Quiz_1 ? `<li><a href="${resources.Quiz_1}" target="_blank">Quiz_1</a></li>` : ''}
                ${resources.Quiz_2 ? `<li><a href="${resources.Quiz_2}" target="_blank">Quiz_2</a></li>` : ''}
                ${resources.Quiz_3 ? `<li><a href="${resources.Quiz_3}" target="_blank">Quiz_3</a></li>` : ''}
            `;
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('quizzes_panepistimio.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('quizzes-container');
            data.quizzes.forEach(quizzes => {
                const item = document.createElement('div');
                item.classList.add('quizzes-item');
                item.innerHTML = `
                    <img src="${quizzes.image}" alt="${quizzes.title}">
                    <h3>${quizzes.title}</h3>
                    <p>${quizzes.description}</p>
                    <button class="more-button">Περισσότερα</button>
                    <ul class="dropdown" style="display: none;"></ul>
                `;
                container.appendChild(item);

              // Προσθήκη event listener για το κουμπί "Περισσότερα"
                const button = item.querySelector('.more-button');
                const dropdown = item.querySelector('.dropdown');
                button.addEventListener('click', () => {
                    toggleDropdown(dropdown, quizzes.resources || {});
                });
            });
        })
        .catch(error => console.error('Error loading quizzes:', error));
});

function toggleDropdown(dropdown, resources) {
    if (!resources || Object.keys(resources).length === 0) {
        dropdown.innerHTML = '<li>Δεν υπάρχουν διαθέσιμα quizz.</li>';
    } else {
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.innerHTML = `
                ${resources.Quiz_1 ? `<li><a href="${resources.Quiz_1}" target="_blank">Quiz_1</a></li>` : ''}
                ${resources.Quiz_2 ? `<li><a href="${resources.Quiz_2}" target="_blank">Quiz_2</a></li>` : ''}
                ${resources.Quiz_3 ? `<li><a href="${resources.Quiz_3}" target="_blank">Quiz_3</a></li>` : ''}
            `;
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }
}