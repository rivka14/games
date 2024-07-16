document.addEventListener('DOMContentLoaded', () => {

    //בשביל החיפוש
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

        // גלילה לאזור המשחקים
        gamesSection.scrollIntoView({ behavior: 'smooth' });
    }

    // חיפוש בעת שליחת הטופס
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // מניעת שליחת הטופס
        performSearch();
    });





    //  פתיחת חלונית התחברות
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
        // כאן תוכל להוסיף לוגיקת התחברות
        loginModal.hide();
        clearTimeout(loginTimer);
    });

    


    // פתיחת חלונית הרשמה 

    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        // כאן תוכל להוסיף לוגיקה לשליחת הנתונים לשרת או לשמירה מקומית
        console.log('Signup:', { username, email, password });

        // איפוס הטופס
        signupForm.reset();
    });



    ///הקםצה אם לא התחבר

    // function startLoginTimer() {
    //     clearTimeout(loginTimer);
    //     loginTimer = setTimeout(() => {
    //         loginModal.show(); // שינוי: פתיחת חלונית ההתחברות במקום הצגת הודעה
    //     }, 10000); // 10 שניות
    // }


    // setTimeout(() => {
    //     if (!document.querySelector('.modal.show')) {
    //       loginModal.show();
    //     }
    //   }, 10000);

    // document.getElementById('loginModal').addEventListener('hidden.bs.modal', () => {
    //     clearTimeout(loginTimer);
    // });


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