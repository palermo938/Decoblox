document.addEventListener('DOMContentLoaded', () => {
    const birthDay = document.getElementById('birthDay');
    const birthYear = document.getElementById('birthYear');

    if (birthDay) {
        for (let d = 1; d <= 31; d++) {
            const opt = document.createElement('option');
            opt.value = d;
            opt.textContent = d;
            birthDay.appendChild(opt);
        }
    }

    if (birthYear) {
        for (let y = 2026; y >= 1920; y--) {
            const opt = document.createElement('option');
            opt.value = y;
            opt.textContent = y;
            birthYear.appendChild(opt);
        }
    }

    const welcomeModal = document.getElementById('welcomeModal');
    const understandBtn = document.getElementById('understandBtn');
    const signUpUsername = document.getElementById('signUpUsername');

    if (understandBtn && welcomeModal) {
        understandBtn.focus();
        understandBtn.addEventListener('click', () => {
            welcomeModal.style.opacity = '0';
            setTimeout(() => {
                welcomeModal.style.display = 'none';
                if (signUpUsername) signUpUsername.focus();
            }, 200);
        });
    }

    const genderFemaleBtn = document.getElementById('genderFemaleBtn');
    const genderMaleBtn = document.getElementById('genderMaleBtn');
    const selectedGenderInput = document.getElementById('selectedGender');

    function setGender(gender) {
        selectedGenderInput.value = gender;
        genderFemaleBtn.classList.toggle('active', gender === 'female');
        genderMaleBtn.classList.toggle('active', gender === 'male');
    }

    if (genderFemaleBtn && genderMaleBtn) {
        genderFemaleBtn.addEventListener('click', () => setGender('female'));
        genderMaleBtn.addEventListener('click', () => setGender('male'));
    }

    const signUpCard = document.getElementById('signUpCard');
    const signInCard = document.getElementById('signInCard');
    const topModeToggleBtn = document.getElementById('topModeToggleBtn');
    const switchToSignUpLink = document.getElementById('switchToSignUpLink');
    let isSignUpView = true;

    function setAuthView(showSignUp) {
        isSignUpView = showSignUp;
        signUpCard.classList.toggle('hidden', !showSignUp);
        signInCard.classList.toggle('hidden', showSignUp);
        topModeToggleBtn.textContent = showSignUp ? 'Log In' : 'Sign Up';
    }

    if (topModeToggleBtn) {
        topModeToggleBtn.addEventListener('click', () => setAuthView(!isSignUpView));
    }

    if (switchToSignUpLink) {
        switchToSignUpLink.addEventListener('click', () => setAuthView(true));
    }

    const signUpForm = document.getElementById('decobloxSignUpForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const month = document.getElementById('birthMonth').value;
            const day = document.getElementById('birthDay').value;
            const year = document.getElementById('birthYear').value;
            const username = document.getElementById('signUpUsername').value.trim();
            const password = document.getElementById('signUpPassword').value;

            if (!month || !day || !year) {
                showCardStatus('signUpFeedback', 'Please select your full birthday.', 'error');
                return;
            }
            if (username.length < 3 || username.length > 20) {
                showCardStatus('signUpFeedback', 'Username must be between 3 and 20 characters.', 'error');
                return;
            }
            if (password.length < 6) {
                showCardStatus('signUpFeedback', 'Password must be at least 6 characters long.', 'error');
                return;
            }

            showCardStatus('signUpFeedback', 'Error: Decoblox is still WIP. Redirecting...', 'error');
            setTimeout(() => {
                window.location.href = '/error';
            }, 1000);
        });
    }

    const signInForm = document.getElementById('decobloxSignInForm');
    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('signInUsername').value.trim();
            const password = document.getElementById('signInPassword').value;

            if (!username || !password) {
                showCardStatus('signInFeedback', 'Username and password are required.', 'error');
                return;
            }

            showCardStatus('signInFeedback', 'Error: Decoblox is still WIP. Redirecting...', 'error');
            setTimeout(() => {
                window.location.href = '/error';
            }, 1000);
        });
    }
});

function showCardStatus(elementId, message, type) {
    const box = document.getElementById(elementId);
    if (!box) return;

    box.textContent = message;
    box.className = 'status-box';

    if (type === 'error') {
        box.classList.add('status-error');
    } else if (type === 'success') {
        box.classList.add('status-success');
    } else {
        box.classList.add('status-info');
    }
}