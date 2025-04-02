document.addEventListener('DOMContentLoaded', () => {

//search
    const searchForm = document.querySelector('form[role="search"]');
    const searchInput = document.getElementById('game-search');
    const gamesSection = document.getElementById('games-section');
    const gameCards = gamesSection.querySelectorAll('.game-card');
    let noResultsMessage = gamesSection.querySelector('.no-results-message');

    if (!noResultsMessage) {
        noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No results, try searching again';
        noResultsMessage.style.display = 'none';
        noResultsMessage.classList.add('no-results-message');
        gamesSection.appendChild(noResultsMessage);
    }

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let hasResults = false;

        gameCards.forEach(card => {
            const title = card.querySelector('.game-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = '';
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });

        if (hasResults) {
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'block';
        }

        // area games
        gamesSection.scrollIntoView({ behavior: 'smooth' });
    }

    // search when send the file
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); //prevent sending file
        performSearch();
    });





    const loginButton = document.getElementById('loginButton');
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    const loginForm = document.getElementById('loginForm');
    let loginTimer;

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        loginModal.show();
        startLoginTimer();
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        loginModal.hide();
        clearTimeout(loginTimer);
    });

    



    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        console.log('Signup:', { username, email, password });

        // Reset the form
        signupForm.reset();
    });


    document.addEventListener('DOMContentLoaded', () => {
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        let hasInteracted = false;

        // בדיקה אם המשתמש לחץ על כפתור ההתחברות
        document.getElementById('loginButton').addEventListener('click', () => {
            hasInteracted = true;
        });

        // טיימר לפתיחת החלונית אחרי 10 שניות
        setTimeout(() => {
            if (!hasInteracted) {
                loginModal.show();
            }
        }, 10000);
    });
    
});
