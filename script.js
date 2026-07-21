// Banco de dados de filmes vazio (pronto para você adicionar os seus com calma)
const movies = [];

// URLs dos Avatares
const availableAvatars = [
    "https://i.ibb.co/CpdwWKKj/44121.jpg", 
    "https://i.ibb.co/ks41CQmb/44120.jpg", 
    "https://i.ibb.co/Vch7PHsr/44118.jpg", 
    "https://i.ibb.co/VY9D3n1r/44119.jpg", 
    "https://i.ibb.co/pvs3T14g/44122.jpg"  
];

// Elementos da Tela
const authScreen = document.getElementById('authScreen');
const profileScreen = document.getElementById('profileScreen');
const mainSite = document.getElementById('mainSite');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterBtn = document.getElementById('showRegister');
const showLoginBtn = document.getElementById('showLogin');

// Elementos de Perfis
const profilesGrid = document.getElementById('profilesGrid');
const btnAddProfileModal = document.getElementById('btnAddProfileModal');
const profileModal = document.getElementById('profileModal');
const modalProfileTitle = document.getElementById('modalProfileTitle');
const newProfileName = document.getElementById('newProfileName');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const cancelProfileBtn = document.getElementById('cancelProfileBtn');
const currentProfileNameText = document.getElementById('currentProfileNameText');
const activeProfileBadge = document.getElementById('activeProfileBadge');
const avatarSelectorGrid = document.getElementById('avatarSelectorGrid');

let selectedAvatarUrl = availableAvatars[0];
let editingProfileIndex = null; 

// Elementos de Alerta
const customModal = document.getElementById('customModal');
const modalMessage = document.getElementById('modalMessage');
const modalCloseBtn = document.getElementById('modalCloseBtn');

function showModal(message) {
    if (modalMessage && customModal) {
        modalMessage.textContent = message;
        customModal.style.display = 'flex';
    } else {
        alert(message);
    }
}

if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
        customModal.style.display = 'none';
    });
}

// Elementos do Catálogo
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const catButtons = document.querySelectorAll('.cat-btn');

// Alternar entre tela de Login e Cadastro com animação/estilo padrão
if (showRegisterBtn && showLoginBtn) {
    showRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
    });

    showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'flex';
    });
}

// Cadastro
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;

        localStorage.setItem('playCine_name', name);
        localStorage.setItem('playCine_email', email);
        localStorage.setItem('playCine_password', password);

        const defaultProfiles = [{ name: name, avatar: availableAvatars[0] }];
        localStorage.setItem('playCine_profiles', JSON.stringify(defaultProfiles));

        showModal('Conta criada com sucesso! Faça login para entrar.');
        registerForm.reset();
        registerForm.style.display = 'none';
        loginForm.style.display = 'flex';
    });
}

// Login
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('loginEmail').value;
        const passwordInput = document.getElementById('loginPassword').value;

        const savedEmail = localStorage.getItem('playCine_email');
        const savedPassword = localStorage.getItem('playCine_password');

        if (!savedEmail) {
            showModal('Nenhuma conta encontrada! Por favor, cadastre-se primeiro.');
            return;
        }

        if (emailInput === savedEmail && passwordInput === savedPassword) {
            authScreen.style.display = 'none';
            
            let profiles = JSON.parse(localStorage.getItem('playCine_profiles'));
            if (!profiles || profiles.length === 0) {
                const userName = localStorage.getItem('playCine_name') || 'Convidado';
                profiles = [{ name: userName, avatar: availableAvatars[0] }];
                localStorage.setItem('playCine_profiles', JSON.stringify(profiles));
            }

            renderProfiles();
            profileScreen.style.display = 'flex';
        } else {
            showModal('E-mail ou senha incorretos! Acesso negado.');
        }
    });
}

// Renderizar Perfis
function renderProfiles() {
    if (!profilesGrid) return;
    profilesGrid.innerHTML = '';
    const profiles = JSON.parse(localStorage.getItem('playCine_profiles')) || [];

    profiles.forEach((profile, index) => {
        const card = document.createElement('div');
        card.classList.add('profile-card');
        
        const avatarImg = profile.avatar || availableAvatars[0];

        card.innerHTML = `
            <div class="profile-avatar-wrapper">
                <div class="profile-avatar">
                    <img src="${avatarImg}" alt="${profile.name}">
                </div>
                <div class="edit-pencil-badge" title="Editar Perfil">
                    <i class="fa-solid fa-pen"></i>
                </div>
            </div>
            <span class="profile-name">${profile.name}</span>
        `;

        card.addEventListener('click', (e) => {
            if (e.target.closest('.edit-pencil-badge')) {
                e.stopPropagation();
                openEditProfileModal(index);
                return;
            }

            if (currentProfileNameText) currentProfileNameText.textContent = profile.name;
            profileScreen.style.display = 'none';
            mainSite.style.display = 'block';
            displayMovies(movies);
        });

        profilesGrid.appendChild(card);
    });
}

if (activeProfileBadge) {
    activeProfileBadge.addEventListener('click', () => {
        mainSite.style.display = 'none';
        renderProfiles();
        profileScreen.style.display = 'flex';
    });
}

function renderAvatarSelector(currentSelectedUrl) {
    if (!avatarSelectorGrid) return;
    avatarSelectorGrid.innerHTML = '';
    availableAvatars.forEach(url => {
        const item = document.createElement('div');
        item.classList.add('avatar-selector-item');
        if (url === currentSelectedUrl) {
            item.classList.add('selected');
            selectedAvatarUrl = url;
        }

        item.innerHTML = `<img src="${url}" alt="Avatar">`;
        
        item.addEventListener('click', () => {
            document.querySelectorAll('.avatar-selector-item').forEach(el => el.classList.remove('selected'));
            item.classList.add('selected');
            selectedAvatarUrl = url;
        });

        avatarSelectorGrid.appendChild(item);
    });
}

if (btnAddProfileModal) {
    btnAddProfileModal.addEventListener('click', () => {
        editingProfileIndex = null;
        if (modalProfileTitle) modalProfileTitle.textContent = "Novo Perfil";
        if (newProfileName) newProfileName.value = '';
        renderAvatarSelector(availableAvatars[0]);
        if (profileModal) profileModal.style.display = 'flex';
    });
}

function openEditProfileModal(index) {
    editingProfileIndex = index;
    if (modalProfileTitle) modalProfileTitle.textContent = "Editar Perfil";
    const profiles = JSON.parse(localStorage.getItem('playCine_profiles')) || [];
    const profile = profiles[index];

    if (newProfileName) newProfileName.value = profile.name;
    renderAvatarSelector(profile.avatar || availableAvatars[0]);
    if (profileModal) profileModal.style.display = 'flex';
}

if (cancelProfileBtn) {
    cancelProfileBtn.addEventListener('click', () => {
        profileModal.style.display = 'none';
    });
}

if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => {
        const nameVal = newProfileName.value.trim();
        if (!nameVal) {
            showModal('Digite um nome para o perfil.');
            return;
        }

        let profiles = JSON.parse(localStorage.getItem('playCine_profiles')) || [];

        if (editingProfileIndex === null) {
            profiles.push({ name: nameVal, avatar: selectedAvatarUrl });
        } else {
            profiles[editingProfileIndex].name = nameVal;
            profiles[editingProfileIndex].avatar = selectedAvatarUrl;
        }

        localStorage.setItem('playCine_profiles', JSON.stringify(profiles));
        profileModal.style.display = 'none';
        renderProfiles();
    });
}

// Exibir Filmes
function displayMovies(movieArray) {
    if (!movieGrid) return;
    movieGrid.innerHTML = "";
    
    if (movieArray.length === 0) {
        movieGrid.innerHTML = "<p style='grid-column: span 2; text-align: center; color: #8b9bb4;'>Nenhum filme encontrado.</p>";
        return;
    }

    movieArray.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        
        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span>${movie.genre} • ${movie.year}</span>
            </div>
        `;
        
        movieGrid.appendChild(card);
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(term) || movie.genre.toLowerCase().includes(term)
        );
        displayMovies(filteredMovies);
    });
}

catButtons.forEach(button => {
    button.addEventListener('click', () => {
        catButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        if (category === 'all') {
            displayMovies(movies);
        } else {
            const filtered = movies.filter(m => m.genre === category);
            displayMovies(filtered);
        }
    });
});
