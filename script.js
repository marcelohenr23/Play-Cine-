const movies = [
    { title: "Velozes e Furiosos", genre: "Ação", year: "2001", image: "https://raw.githubusercontent.com/marcelohenr23/Play-Cine-/main/velozes.png", videoUrl: "https://www.youtube.com/embed/AATGjBGbnqU" },
    { title: "+Velozes +Furiosos", genre: "Ação", year: "2003", image: "https://raw.githubusercontent.com/marcelohenr23/Play-Cine-/main/%2BVelozes.png", videoUrl: "https://www.youtube.com/embed/JNOISthFaS8" },
    { title: "Velozes e Furiosos: Desafio em Tóquio", genre: "Ação", year: "2006", image: "https://raw.githubusercontent.com/marcelohenr23/Play-Cine-/main/velozes%20desafios.jpg", videoUrl: "https://www.youtube.com/embed/mXbfYYX0ZkI" },
    { title: "Velozes e Furiosos 4", genre: "Ação", year: "2009", image: "https://raw.githubusercontent.com/marcelohenr23/Play-Cine-/main/velozes%20e%20furiosos%204.jpg", videoUrl: "https://www.youtube.com/embed/a9--AI3ZGaw" },
    { title: "Velozes e Furiosos 5: Operação Rio", genre: "Ação", year: "2011", image: "https://raw.githubusercontent.com/marcelohenr23/Play-Cine-/main/velozes%20e%20furiosos%205.jpg", videoUrl: "https://www.youtube.com/embed/e4tEwEZYELc" }
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

let selectedAvatarUrl = availableAvatars[0];
let editingProfileIndex = null;

function showAlert(message) {
    modalMessage.textContent = message;
    customModal.style.display = 'flex';
}

if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
        customModal.style.display = 'none';
    });
}

function switchView(targetSection) {
    authSection.style.display = 'none';
    profileSection.style.display = 'none';
    mainAppSection.style.display = 'none';
    targetSection.style.display = 'block';
}

if (toRegisterBtn && toLoginBtn) {
    toRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    toLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;

        localStorage.setItem('playCine_name', name);
        localStorage.setItem('playCine_email', email);
        localStorage.setItem('playCine_password', password);

        const defaultProfiles = [{ name: name, avatar: availableAvatars[0] }];
        localStorage.setItem('playCine_profiles', JSON.stringify(defaultProfiles));

        showAlert('Conta criada com sucesso! Faça login.');
        registerForm.reset();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('loginEmail').value.trim();
        const passwordInput = document.getElementById('loginPassword').value;

        const savedEmail = localStorage.getItem('playCine_email');
        const savedPassword = localStorage.getItem('playCine_password');

        if (!savedEmail) {
            showAlert('Nenhuma conta encontrada. Cadastre-se primeiro!');
            return;
        }

        if (emailInput === savedEmail && passwordInput === savedPassword) {
            let profiles = JSON.parse(localStorage.getItem('playCine_profiles'));
            if (!profiles || profiles.length === 0) {
                const userName = localStorage.getItem('playCine_name') || 'Convidado';
                profiles = [{ name: userName, avatar: availableAvatars[0] }];
                localStorage.setItem('playCine_profiles', JSON.stringify(profiles));
            }

            renderProfiles();
            switchView(profileSection);
        } else {
            showAlert('E-mail ou senha incorretos.');
        }
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
        profileModal.style.display = 'flex';
    });
}

function openProfileModalForEdit(index) {
    editingProfileIndex = index;
    if (modalProfileTitle) modalProfileTitle.textContent = "Editar Perfil";
    const profiles = JSON.parse(localStorage.getItem('playCine_profiles')) || [];
    const profile = profiles[index];

    if (profileNameInput) profileNameInput.value = profile.name;
    renderAvatarSelector(profile.avatar || availableAvatars[0]);
    profileModal.style.display = 'flex';
}

if (cancelProfileBtn) {
    cancelProfileBtn.addEventListener('click', () => {
        profileModal.style.display = 'none';
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
        profileModal.style.display = 'none';
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

            // Evento de clique para abrir o player de video do filme
    card.addEventListener('click', () => {
        currentMovieUrl = movie.videoUrl; // Guarda o link do filme atual
        moviePlayer.src = currentMovieUrl;
        modalMovieTitle.textContent = movie.title;
        modalMovieDesc.textContent = `${movie.genre} • ${movie.year}`;
        videoModal.style.display = 'flex';
    });
        
// Fechar modal de vídeo
if (closeVideoModalBtn) {
    closeVideoModalBtn.addEventListener('click', () => {
        moviePlayer.src = ''; // Interrompe o vídeo ao fechar
        videoModal.style.display = 'none';
    });
}

// Fechar o modal se clicar fora da caixa de conteúdo
window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        moviePlayer.src = '';
        videoModal.style.display = 'none';
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
        
// Ação do botão "Assistir Filme"
if (watchFullMovieBtn) {
    watchFullMovieBtn.addEventListener('click', () => {
        if (currentMovieUrl) {
            moviePlayer.src = currentMovieUrl + "?autoplay=1";
        }
    });
}
        
        
