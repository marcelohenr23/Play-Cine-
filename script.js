// Base de dados com os filmes da saga Velozes e Furiosos e seus links de vídeo
const movies = [
    { title: "Velozes e Furiosos", genre: "Ação", year: "2001", image: "https://raw.githubusercontent.com/marcelohenr23/Play-Cine-/main/velozes.png", videoUrl: "https://www.youtube.com/embed/ZsJz2TJAPy4" },
    { title: "+Velozes +Furiosos", genre: "Ação", year: "2003", image: "https://raw.githubusercontent.com/marcelohenr23/Play-Cine-/main/%2BVelozes.png", videoUrl: "https://www.youtube.com/embed/2TAOizOnNPo" },
    { title: "Velozes e Furiosos: Desafio em Tóquio", genre: "Ação", year: "2006", image: "https://raw.githubusercontent.com/marcelohenr23/Play-Cine-/main/velozes%20desafios.jpg", videoUrl: "https://www.youtube.com/embed/p_InqUtDhuc" },
    { title: "Velozes e Furiosos 4", genre: "Ação", year: "2009", image: "https://raw.githubusercontent.com/marcelohenr23/Play-Cine-/main/velozes%20e%20furiosos%204.jpg", videoUrl: "https://www.youtube.com/embed/kz89hjKmdwg" },
    { title: "Velozes e Furiosos 5: Operação Rio", genre: "Ação", year: "2011", image: "https://raw.githubusercontent.com/marcelohenr23/Play-Cine-/main/velozes%20e%20furiosos%205.jpg", videoUrl: "https://www.youtube.com/embed/olvV4XZ9j90" }
];

// Avatares oficiais disponíveis
const availableAvatars = [
    "https://i.ibb.co/CpdwWKKj/44121.jpg", 
    "https://i.ibb.co/ks41CQmb/44120.jpg", 
    "https://i.ibb.co/Vch7PHsr/44118.jpg", 
    "https://i.ibb.co/VY9D3n1r/44119.jpg", 
    "https://i.ibb.co/pvs3T14g/44122.jpg"  
];

// Seletores de Seções (Telas)
const authSection = document.getElementById('authSection');
const profileSection = document.getElementById('profileSection');
const mainAppSection = document.getElementById('mainAppSection');

// Elementos de Autenticação
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const toRegisterBtn = document.getElementById('toRegister');
const toLoginBtn = document.getElementById('toLogin');

// Elementos de Perfis
const profilesGrid = document.getElementById('profilesGrid');
const openAddProfileModalBtn = document.getElementById('openAddProfileModal');
const profileModal = document.getElementById('profileModal');
const modalProfileTitle = document.getElementById('modalProfileTitle');
const profileNameInput = document.getElementById('profileNameInput');
const avatarGrid = document.getElementById('avatarGrid');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const cancelProfileBtn = document.getElementById('cancelProfileBtn');
const activeProfileAvatarImg = document.getElementById('activeProfileAvatarImg');
const activeProfileNameText = document.getElementById('activeProfileNameText');
const profileSwitcher = document.getElementById('profileSwitcher');

// Modal de Alerta
const customModal = document.getElementById('customModal');
const modalMessage = document.getElementById('modalMessage');
const modalCloseBtn = document.getElementById('modalCloseBtn');

// Elementos do Catálogo
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Elementos do Modal de Vídeo
const videoModal = document.getElementById('videoModal');
const moviePlayer = document.getElementById('moviePlayer');
const modalMovieTitle = document.getElementById('modalMovieTitle');
const modalMovieDesc = document.getElementById('modalMovieDesc');
const closeVideoModalBtn = document.getElementById('closeVideoModal');
const watchFullMovieBtn = document.getElementById('watchFullMovieBtn');

let selectedAvatarUrl = availableAvatars[0];
let editingProfileIndex = null;
let currentMovieUrl = '';

function showAlert(message) {
    modalMessage.textContent = message;
    customModal.style.display = 'flex';
}

if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
        customModal.style.display = 'none';
    });
}

// Função segura para alternar as telas principais via estilo direto
function switchView(targetSection) {
    if (authSection) authSection.style.display = 'none';
    if (profileSection) profileSection.style.display = 'none';
    if (mainAppSection) mainAppSection.style.display = 'none';

    if (targetSection) {
        targetSection.style.display = 'block';
        window.scrollTo(0, 0);
    }
}

// Alternar entre os formulários de Login e Cadastro de forma correta
if (toRegisterBtn && toLoginBtn) {
    toRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'block';
    });

    toLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (registerForm) registerForm.style.display = 'none';
        if (loginForm) loginForm.style.display = 'block';
    });
}

// Ação de Cadastro
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInputEl = document.getElementById('regName');
        const emailInputEl = document.getElementById('regEmail');
        const passInputEl = document.getElementById('regPassword');

        if (!nameInputEl || !emailInputEl || !passInputEl) return;

        const name = nameInputEl.value.trim();
        const email = emailInputEl.value.trim();
        const password = passInputEl.value;

        localStorage.setItem('playCine_name', name);
        localStorage.setItem('playCine_email', email);
        localStorage.setItem('playCine_password', password);

        const defaultProfiles = [{ name: name, avatar: availableAvatars[0] }];
        localStorage.setItem('playCine_profiles', JSON.stringify(defaultProfiles));

        showAlert('Conta criada com sucesso! Faça login.');
        registerForm.reset();
        registerForm.style.display = 'none';
        if (loginForm) loginForm.style.display = 'block';
    });
}

// Ação de Login (Garante entrada mesmo se os dados salvos estiverem vazios)
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInputEl = document.getElementById('loginEmail');
        const passInputEl = document.getElementById('loginPassword');

        const emailInput = emailInputEl ? emailInputEl.value.trim() : '';
        const passwordInput = passInputEl ? passInputEl.value : '';

        if (!localStorage.getItem('playCine_email')) {
            localStorage.setItem('playCine_email', emailInput || 'teste@email.com');
            localStorage.setItem('playCine_password', passwordInput || '123456');
            localStorage.setItem('playCine_name', 'Marcelo');
            localStorage.setItem('playCine_profiles', JSON.stringify([{ name: 'Marcelo', avatar: availableAvatars[0] }]));
        }

        let profiles = JSON.parse(localStorage.getItem('playCine_profiles'));
        if (!profiles || profiles.length === 0) {
            profiles = [{ name: 'Marcelo', avatar: availableAvatars[0] }];
            localStorage.setItem('playCine_profiles', JSON.stringify(profiles));
        }

        renderProfiles();
        switchView(profileSection);
    });
}

function renderProfiles() {
    if (!profilesGrid) return;
    profilesGrid.innerHTML = '';
    const profiles = JSON.parse(localStorage.getItem('playCine_profiles')) || [];

    profiles.forEach((profile, index) => {
        const card = document.createElement('div');
        card.classList.add('profile-card');
        const avatarImg = profile.avatar || availableAvatars[0];

        card.innerHTML = `
            <div class="profile-avatar-box">
                <img src="${avatarImg}" alt="${profile.name}">
                <div class="profile-edit-badge" title="Editar Perfil">
                    <i class="fa-solid fa-pen"></i>
                </div>
            </div>
            <span>${profile.name}</span>
        `;

        card.addEventListener('click', (e) => {
            if (e.target.closest('.profile-edit-badge')) {
                e.stopPropagation();
                openProfileModalForEdit(index);
                return;
            }

            if (activeProfileNameText) activeProfileNameText.textContent = profile.name;
            if (activeProfileAvatarImg) activeProfileAvatarImg.src = avatarImg;
            
            switchView(mainAppSection);
            renderMovies(movies);
        });

        profilesGrid.appendChild(card);
    });
}

if (profileSwitcher) {
    profileSwitcher.addEventListener('click', () => {
        renderProfiles();
        switchView(profileSection);
    });
}

function renderAvatarSelector(activeUrl) {
    if (!avatarGrid) return;
    avatarGrid.innerHTML = '';
    
    availableAvatars.forEach(url => {
        const option = document.createElement('div');
        option.classList.add('avatar-option');
        if (url === activeUrl) {
            option.classList.add('selected');
            selectedAvatarUrl = url;
        }

        option.innerHTML = `<img src="${url}" alt="Avatar">`;
        
        option.addEventListener('click', () => {
            document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected'));
            option.classList.add('selected');
            selectedAvatarUrl = url;
        });

        avatarGrid.appendChild(option);
    });
}

if (openAddProfileModalBtn) {
    openAddProfileModalBtn.addEventListener('click', () => {
        editingProfileIndex = null;
        if (modalProfileTitle) modalProfileTitle.textContent = "Novo Perfil";
        if (profileNameInput) profileNameInput.value = '';
        renderAvatarSelector(availableAvatars[0]);
        if (profileModal) profileModal.style.display = 'flex';
    });
}

function openProfileModalForEdit(index) {
    editingProfileIndex = index;
    if (modalProfileTitle) modalProfileTitle.textContent = "Editar Perfil";
    const profiles = JSON.parse(localStorage.getItem('playCine_profiles')) || [];
    const profile = profiles[index];

    if (profileNameInput) profileNameInput.value = profile.name;
    renderAvatarSelector(profile.avatar || availableAvatars[0]);
    if (profileModal) profileModal.style.display = 'flex';
}

if (cancelProfileBtn) {
    cancelProfileBtn.addEventListener('click', () => {
        if (profileModal) profileModal.style.display = 'none';
    });
}

if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => {
        const nameVal = profileNameInput.value.trim();
        if (!nameVal) {
            showAlert('Por favor, informe o nome do perfil.');
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
        if (profileModal) profileModal.style.display = 'none';
        renderProfiles();
    });
}

function renderMovies(movieList) {
    if (!movieGrid) return;
    movieGrid.innerHTML = '';

    if (movieList.length === 0) {
        movieGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Nenhum filme encontrado.</p>';
        return;
    }

    movieList.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h4>${movie.title}</h4>
                <span>${movie.genre} • ${movie.year}</span>
            </div>
        `;

        card.addEventListener('click', () => {
            currentMovieUrl = movie.videoUrl;
            if (moviePlayer) moviePlayer.src = currentMovieUrl;
            if (modalMovieTitle) modalMovieTitle.textContent = movie.title;
            if (modalMovieDesc) modalMovieDesc.textContent = `${movie.genre} • ${movie.year}`;
            if (videoModal) videoModal.style.display = 'flex';
        });

        movieGrid.appendChild(card);
    });
}

if (closeVideoModalBtn) {
    closeVideoModalBtn.addEventListener('click', () => {
        if (moviePlayer) moviePlayer.src = '';
        if (videoModal) videoModal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        if (moviePlayer) moviePlayer.src = '';
        if (videoModal) videoModal.style.display = 'none';
    }
});

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        const filtered = movies.filter(m => 
            m.title.toLowerCase().includes(term) || m.genre.toLowerCase().includes(term)
        );
        renderMovies(filtered);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        if (category === 'all') {
            renderMovies(movies);
        } else {
            const filtered = movies.filter(m => m.genre === category);
            renderMovies(filtered);
        }
    });
});

if (watchFullMovieBtn) {
    watchFullMovieBtn.addEventListener('click', () => {
        if (currentMovieUrl && moviePlayer) {
            moviePlayer.src = currentMovieUrl + "?autoplay=1";
        }
    });
        }
        
