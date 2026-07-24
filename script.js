const movies = [
    { title: "Ambulância: Um Dia de Crime", genre: "Ação", year: "2022", image: "img/ambulancia.jpg", videoUrl: "https://fembed.sx/e/763285" },
    { title: "Beekeeper: Rede de Vingança", genre: "Ação", year: "2024", image: "img/beekeeper.jpg", videoUrl: "https://fembed.sx/e/866398" },
    { title: "Code 8: Renegados", genre: "Ficção", year: "2019", image: "img/code8.png", videoUrl: "https://fembed.sx/e/461130-dub" },
    { title: "iBoy", genre: "Ação", year: "2017", image: "img/iboy.jpg", videoUrl: "https://fembed.sx/e/414190-dub" },
    { title: "Legado Explosivo", genre: "Ação", year: "2020", image: "img/legadoexplosivo.webp", videoUrl: "https://fembed.sx/e/553604-dub" },
    { title: "Mãe/Android", genre: "Ficção", year: "2021", image: "img/maexandroid.webp", videoUrl: "https://fembed.sx/e/739413" },
    { title: "Operação Fronteira", genre: "Ação", year: "2019", image: "img/operacaofroteira.jpg", videoUrl: "https://fembed.sx/e/399361" },
    { title: "Project Power", genre: "Ação", year: "2020", image: "img/projectpower.jpg", videoUrl: "https://betterflix.lat/api/player?id=605116&type=movie" },
    { title: "Em Ritmo de Fuga", genre: "Ação", year: "2017", image: "img/em ritmo de fuga.jpg", videoUrl: "https://fembed.sx/e/339403" },
    { title: "Implacável", genre: "Ação", year: "2021", image: "img/implacavel.jpg", videoUrl: "https://fembed.sx/e/534490-dub" },
    { title: "Sem Limite", genre: "Ação", year: "2011", image: "img/semlimite.jpg", videoUrl: "https://fembed.sx/e/1138749-dub" },
    { title: "Vingança", genre: "Ação", year: "2019", image: "img/vinganca.jpg", videoUrl: "https://fembed.sx/e/1195518-dub" },
    { title: "Avatar", genre: "Aventura", year: "2009", image: "img/avata1.jpg", videoUrl: "https://fembed.sx/e/19995-dub" },
    { title: "Avatar: O Caminho da Água", genre: "Aventura", year: "2022", image: "img/avata2.jpg", videoUrl: "https://fembed.sx/e/76600-dub" },
    { title: "Avatar 3", genre: "Aventura", year: "2025", image: "img/avata3.jpg", videoUrl: "https://fembed.sx/e/83533-dub" },
    { title: "A Chamada", genre: "Ação", year: "2023", image: "img/achamada.jpg", videoUrl: "https://fembed.sx/e/762430-dub" },
    { title: "Resgate", genre: "Ação", year: "2020", image: "img/resgate1.jpg", videoUrl: "https://fembed.sx/e/545609-dub" },
    { title: "Resgate 2", genre: "Ação", year: "2023", image: "img/resgate2.jpg", videoUrl: "https://fembed.sx/e/697843-dub" },
    { title: "Tiro Certo", genre: "Ação", year: "2022", image: "img/tirocerto.webp", videoUrl: "https://www.youtube.com/embed/ZsJz2TJAPy4" }
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
            let targetUrl = movie.videoUrl;
            
            if (!targetUrl) {
                const query = encodeURIComponent(movie.title + " trailer oficial");
                targetUrl = `https://www.youtube.com/embed?listType=search&list=${query}`;
            }

            // Recria o elemento do player para garantir que qualquer link (YouTube ou Fembed) carregue perfeitamente
            const playerContainer = moviePlayer.parentElement;
            if (playerContainer) {
                playerContainer.innerHTML = `<iframe id="moviePlayer" src="${targetUrl}" width="100%" height="100%" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
                moviePlayer = document.getElementById('moviePlayer');
            }

            modalMovieTitle.textContent = movie.title;
            modalMovieDesc.textContent = `${movie.genre} • ${movie.year}`;
            videoModal.style.display = 'flex';
        });

        movieGrid.appendChild(card);
    });
}

if (closeVideoModalBtn) {
    closeVideoModalBtn.addEventListener('click', () => {
        if (moviePlayer) moviePlayer.src = '';
        videoModal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        if (moviePlayer) moviePlayer.src = '';
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
