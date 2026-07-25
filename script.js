// Seus Filmes (puxando as imagens que você sobe)
const movies = [
    { title: "Missão Pandora", genre: "Ficção", year: "2024", image: "img/1.jpg", videoUrl: "" },
    // Adicione seus outros filmes aqui...
];

// Suas Séries (puxando as capas que você sobe para a pasta img)
const series = [
    { title: "Halo 4: Em Direção ao Amanhecer", genre: "Ficção", year: "2012", image: "img/amanhacer.jpg", videoUrl: "" },
    { title: "Arcanjo Renegado", genre: "Ação", year: "2020", image: "img/arcanjo.jpg", videoUrl: "" },
    { title: "Cães de Caça", genre: "Ação", year: "2023", image: "img/caes.jpg", videoUrl: "" },
    { title: "Cojote: Herói e Fera", genre: "Ação", year: "2024", image: "img/coyote.jpg", videoUrl: "" },
    { title: "Demolidor: Renascido", genre: "Ação", year: "2025", image: "img/demolidor.jpg", videoUrl: "" },
    { title: "Emergência Radioativa", genre: "Ficção", year: "2024", image: "img/emergecia.jpg", videoUrl: "" },
    { title: "Fear the Walking Dead", genre: "Terror", year: "2015", image: "img/fear.jpg", videoUrl: "" },
    { title: "Impuros", genre: "Ação", year: "2018", image: "img/impuros.jpg", videoUrl: "" },
    { title: "Luke Cage", genre: "Ação", year: "2016", image: "img/luke.jpg", videoUrl: "" },
    { title: "Manto e Adaga", genre: "Ficção", year: "2018", image: "img/manto.jpg", videoUrl: "" },
    { title: "Monarch: Legado de Monstros", genre: "Ficção", year: "2023", image: "img/monarch.jpg", videoUrl: "" },
    { title: "Olhos de Wakanda", genre: "Animação", year: "2024", image: "img/olhos.jpg", videoUrl: "" },
    { title: "One Piece: A Série", genre: "Aventura", year: "2023", image: "img/onepice.jpg", videoUrl: "" },
    { title: "Os 100", genre: "Ficção", year: "2014", image: "img/os100.jpg", videoUrl: "" },
    { title: "Prison Break", genre: "Ação", year: "2005", image: "img/prison.jpg", videoUrl: "" },
    { title: "Reacher", genre: "Ação", year: "2022", image: "img/reacher.jpg", videoUrl: "" },
    { title: "Rick e Morty", genre: "Animação", year: "2013", image: "img/rickenmoney.jpg", videoUrl: "" },
    { title: "O Ringue", genre: "Ação", year: "2024", image: "img/ringue.jpg", videoUrl: "" },
    { title: "Supergirl", genre: "Ficção", year: "2015", image: "img/supergil.jpg", videoUrl: "" },
    { title: "Taxi Driver", genre: "Ação", year: "2021", image: "img/taxidrive.jpg", videoUrl: "" },
    { title: "The Boys", genre: "Ação", year: "2019", image: "img/theboy.jpg", videoUrl: "" },
    { title: "Twelve", genre: "Ação", year: "2025", image: "img/twe.jpg", videoUrl: "" }
];

const availableAvatars = [
    "https://i.ibb.co/CpdwWKKj/44121.jpg", 
    "https://i.ibb.co/ks41CQmb/44120.jpg", 
    "https://i.ibb.co/Vch7PHsr/44118.jpg", 
    "https://i.ibb.co/VY9D3n1r/44119.jpg", 
    "https://i.ibb.co/pvs3T14g/44122.jpg"  
];

const authSection = document.getElementById('authSection');
const profileSection = document.getElementById('profileSection');
const mainAppSection = document.getElementById('mainAppSection');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const toRegisterBtn = document.getElementById('toRegister');
const toLoginBtn = document.getElementById('toLogin');

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

const customModal = document.getElementById('customModal');
const modalMessage = document.getElementById('modalMessage');
const modalCloseBtn = document.getElementById('modalCloseBtn');

const movieGrid = document.getElementById('serieGrid'); // Atualizado para o ID do seu novo HTML
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

const videoModal = document.getElementById('videoModal');
const modalMovieTitle = document.getElementById('modalMovieTitle');
const modalMovieDesc = document.getElementById('modalMovieDesc');
const closeVideoModalBtn = document.getElementById('closeVideoModal');
let moviePlayer = document.getElementById('moviePlayer');

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
    authSection.classList.remove('active');
    profileSection.classList.remove('active');
    mainAppSection.classList.remove('active');

    targetSection.classList.add('active');
    window.scrollTo(0, 0);
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
    const movieGridEl = document.getElementById('movieGrid');
    const serieGridEl = document.getElementById('serieGrid');

    if (movieGridEl) movieGridEl.innerHTML = '';
    if (serieGridEl) serieGridEl.innerHTML = '';

    const visibleMovies = movieList.filter(m => !m.hidden);

    if (visibleMovies.length === 0) {
        if (movieGridEl) movieGridEl.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Nenhum item encontrado.</p>';
        return;
    }

    visibleMovies.forEach(item => {
        // Identifica se é série pelo campo de tipo ou categoria se houver, ou separa por uma lista padrão
        const genreLower = (item.genre || '').toLowerCase();
        const titleLower = (item.title || '').toLowerCase();
        
        // Verifica se é série (pode ajustar conforme os gêneros ou títulos cadastrados)
        const isSeries = genreLower.includes('série') || genreLower.includes('serie') || 
                         titleLower.includes('temporada') || titleLower.includes('ep.');

        const card = createMovieCard(item);

        if (isSeries) {
            if (serieGridEl) serieGridEl.appendChild(card);
        } else {
            if (movieGridEl) movieGridEl.appendChild(card);
        }
    });
}
