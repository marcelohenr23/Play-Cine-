window.addEventListener('DOMContentLoaded', () => {
    // Garante que sempre exista um perfil padrão salvo para nunca travar a tela
    let profiles = JSON.parse(localStorage.getItem('playCine_profiles'));
    if (!profiles || profiles.length === 0) {
        const defaultName = localStorage.getItem('playCine_name') || 'Meu Perfil';
        profiles = [{ name: defaultName, avatar: "https://i.ibb.co/CpdwWKKj/44121.jpg" }];
        localStorage.setItem('playCine_profiles', JSON.stringify(profiles));
    }

    // Se já houver email ou perfis salvos, exibe a tela de perfis perfeitamente
    const authSection = document.getElementById('authSection');
    const profileSection = document.getElementById('profileSection');
    
    if (authSection) authSection.classList.remove('active');
    if (profileSection) profileSection.classList.add('active');
    
    if (typeof renderProfiles === 'function') {
        renderProfiles();
    }
});

const movies = [
    { title: "Missão Pandora", genre: "Ficção", year: "2024", image: "img/1.jpg", videoUrl: "" },
    { title: "Águas Que Corroem", genre: "Terror", year: "2024", image: "img/agu.jpg", videoUrl: "" },
    { title: "Caça-Fantasmas", genre: "Comédia", year: "2016", image: "img/caca.jpg", videoUrl: "" },
    { title: "Caçada Sem Regras", genre: "Ação", year: "2023", image: "img/cacada.jpg", videoUrl: "" },
    { title: "Furioza 2", genre: "Ação", year: "2024", image: "img/fuu.jpg", videoUrl: "" },
    { title: "Gigantes de Aço", genre: "Ficção", year: "2011", image: "img/giga.jpg", videoUrl: "" },
    { title: "Guerra Primitiva", genre: "Ação", year: "2024", image: "img/gu.jpg", videoUrl: "" },
    { title: "A Primeira Noite de Crime", genre: "Terror", year: "2018", image: "img/noi.jpg", videoUrl: "" },
    { title: "Jovens Titãs: O Contrato de Judas", genre: "Animação", year: "2017", image: "img/tita.jpg", videoUrl: "" },
    { title: "Caçador de Tormentas", genre: "Ação", year: "2023", image: "img/to.jpg", videoUrl: "" },
    { title: "Uma História de Vingança", genre: "Ação", year: "2017", image: "img/vi.jpg", videoUrl: "" },
    { title: "Ong-Bak 2", genre: "Ação", year: "2008", image: "img/ongbak2.jpg", videoUrl: "https://fembed.sx/e/16353-dub" },
    { title: "Ong-Bak 3", genre: "Ação", year: "2010", image: "img/ongbak3 (1).jpg", videoUrl: "https://fembed.sx/e/43209-dub" },
    { title: "Assalto à Casa Blanca", genre: "Ação", year: "2013", image: "img/assaltoacasabranca.jpg", videoUrl: "" },
    { title: "Busca Explosiva 4", genre: "Ação", year: "2023", image: "img/buscaexplosiva4.jpg", videoUrl: "" },
    { title: "Força Bruta: Punição", genre: "Ação", year: "2024", image: "img/forcabrutapunicao.jpg", videoUrl: "" },
    { title: "Força Bruta: Sem Saída", genre: "Ação", year: "2022", image: "img/forcabrutasemsaida.jpg", videoUrl: "" },
    { title: "O Valente", genre: "Ação", year: "2023", image: "img/ovalente.jpg", videoUrl: "" },
    { title: "Plano de Família 2", genre: "Ação", year: "2024", image: "img/planodefamilia2.jpg", videoUrl: "" },
    { title: "Quem Morre", genre: "Terror", year: "2023", image: "img/quemmorre.jpg", videoUrl: "" },
    { title: "Red: Aposentados e Perigosos", genre: "Ação", year: "2010", image: "img/redaposentado.jpg", videoUrl: "" },
    { title: "Sicario", genre: "Ação", year: "2015", image: "img/sicario.jpg", videoUrl: "" },
    { title: "Superman: O Retorno", genre: "Ficção", year: "2006", image: "img/oretorno.jpg", videoUrl: "" },
    { title: "Caçada Sangrenta", genre: "Ação", year: "2024", image: "img/cacadasangrenta.jpg", videoUrl: "https://fembed.sx/e/1084222-dub" },
    { title: "Cores da Justiça", genre: "Ação", year: "2024", image: "img/coresdajustica.jpg", videoUrl: "https://fembed.sx/e/578189-dub" },
    { title: "Gamer", genre: "Ação", year: "2009", image: "img/gamer.jpg", videoUrl: "https://fembed.sx/e/18501-dub" },
    { title: "Johnny English", genre: "Comédia", year: "2003", image: "img/jonyingles.jpg", videoUrl: "https://fembed.sx/e/463272-dub" },
    { title: "O Ataque dos 6 Tubarões", genre: "Terror", year: "2021", image: "img/oataquedos6tubaroes.jpg", videoUrl: "https://fembed.sx/e/522438-dub" },
    { title: "A Guerra do Amanhã", genre: "Ficção", year: "2021", image: "img/tomorow.jpg", videoUrl: "" },
    { title: "Ambulância: Um Dia de Crime", genre: "Ação", year: "2022", image: "img/ambulancia.jpg", videoUrl: "https://fembed.sx/e/763285" },
    { title: "Beekeeper: Rede de Vingança", genre: "Ação", year: "2024", image: "img/beekeeper.jpg", videoUrl: "https://fembed.sx/e/866398" },
    { title: "Code 8: Renegados", genre: "Ficção", year: "2019", image: "img/code8.png", videoUrl: "https://fembed.sx/e/461130-dub" },
    { title: "iBoy", genre: "Ação", year: "2017", image: "img/iboy.jpg", videoUrl: "https://fembed.sx/e/414190-dub" },
    { title: "Legado Explosivo", genre: "Ação", year: "2020", image: "img/legadoexplosivo.webp", videoUrl: "https://fembed.sx/e/553604-dub" },
    { title: "Operação Fronteira", genre: "Ação", year: "2019", image: "img/operacaofroteira.jpg", videoUrl: "https://fembed.sx/e/399361" },
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
    { title: "Um Panda em Apuros 2", genre: "Animação", year: "2022", image: "img/apuro3.jpg", videoUrl: "" },
    { title: "Baywatch: Marés Vivas", genre: "Ação", year: "2017", image: "img/baywat.jpg", videoUrl: "" },
    { title: "A Barraca do Beijo 3", genre: "Romance", year: "2021", image: "img/beijo3.jpg", videoUrl: "" },
    { title: "A Fantástica Fábrica de Chocolate", genre: "Fantasia", year: "1971", image: "img/chocolate1.jpg", videoUrl: "" },
    { title: "Dora e a Cidade Perdida", genre: "Aventura", year: "2019", image: "img/cidadeperdida.jpg", videoUrl: "" },
    { title: "A Idade do Gelo 3: O Despertar dos Dinossauros", genre: "Animação", year: "2009", image: "img/eradogelo.jpg", videoUrl: "" },
    { title: "Charlie e a Fábrica de Chocolate", genre: "Fantasia", year: "2005", image: "img/fabricachocolate.jpg", videoUrl: "" },
    { title: "A Grande Família: O Filme", genre: "Comédia", year: "2007", image: "img/familia.jpg", videoUrl: "" },
    { title: "Gru: O Maldisposto", genre: "Animação", year: "2010", image: "img/gru.jpg", videoUrl: "" },
    { title: "Gru: O Maldisposto 3", genre: "Animação", year: "2017", image: "img/gru3.jpg", videoUrl: "" },
    { title: "Minions", genre: "Animação", year: "2015", image: "img/minios.jpg", videoUrl: "" },
    { title: "Ó Paí, Ó", genre: "Comédia", year: "2007", image: "img/opaio.jpg", videoUrl: "" },
    { title: "O Cão e a Raposa 2", genre: "Animação", year: "2006", image: "img/raposa2.jpg", videoUrl: "" },
    { title: "R.I.P.D.: Agentes do Além", genre: "Ação", year: "2013", image: "img/rip.jpg", videoUrl: "" },
    { title: "Soul: Uma Aventura com Alma", genre: "Animação", year: "2020", image: "img/soul.jpg", videoUrl: "" },
    { title: "Toy Story 2", genre: "Animação", year: "1999", image: "img/story2.jpg", videoUrl: "" },
    { title: "Toy Story 3", genre: "Animação", year: "2010", image: "img/story3.jpg", videoUrl: "" },
    { title: "Toy Story 4", genre: "Animação", year: "2019", image: "img/story4.jpg", videoUrl: "" },
    { title: "Todo Mundo em Pânico 2", genre: "Comédia", year: "2001", image: "img/tdmundo2.jpg", videoUrl: "" },
    { title: "Todo Mundo em Pânico 3", genre: "Comédia", year: "2003", image: "img/tdmundo3.jpg", videoUrl: "" }
];

const series = [
  { title: "Avatar: O Último Mestre do Ar", genre: "Aventura", year: "2024", image: "img/avata.jpg", videoUrl: "" },
  { title: "Capoeiras", genre: "Ação", year: "2024", image: "img/capoeiras.jpg", videoUrl: "" },
  { title: "O Dia do Chacal", genre: "Thriller", year: "2024", image: "img/chacal.jpg", videoUrl: "" },
  { title: "Coragem, Irmão!", genre: "Ação", year: "2024", image: "img/coragemirmao.jpg", videoUrl: "" },
  { title: "Punho de Ferro", genre: "Ação", year: "2017", image: "img/punhodeferro.jpg", videoUrl: "" },
  { title: "Walker", genre: "Drama", year: "2021", image: "img/walker.jpg", videoUrl: "" }
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

const movieGrid = document.getElementById('movieGrid');
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
            renderMovies();
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

function renderMovies(customMovies, customSeries) {
    const movieGridEl = document.getElementById('movieGrid');
    const serieGridEl = document.getElementById('serieGrid');
    const recentGridEl = document.getElementById('recentMovieGrid');

    if (movieGridEl) movieGridEl.innerHTML = '';
    if (serieGridEl) serieGridEl.innerHTML = '';
    if (recentGridEl) recentGridEl.innerHTML = '';

    const listToRenderMovies = customMovies || movies;
    const listToRenderSeries = customSeries || series;

    const visibleMovies = listToRenderMovies.filter(m => !m.hidden);
    const visibleSeries = listToRenderSeries.filter(s => !s.hidden);

    if (recentGridEl) {
        const recentMovies = visibleMovies.slice(0, 4);
        if (recentMovies.length > 0) {
            recentMovies.forEach(movie => {
                recentGridEl.appendChild(createMovieCard(movie));
            });
        }
    }

    if (movieGridEl) {
        if (visibleMovies.length > 0) {
            visibleMovies.forEach(movie => {
                movieGridEl.appendChild(createMovieCard(movie));
            });
        } else {
            movieGridEl.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Nenhum filme encontrado.</p>';
        }
    }

    if (serieGridEl) {
        if (visibleSeries.length > 0) {
            visibleSeries.forEach(serie => {
                serieGridEl.appendChild(createMovieCard(serie));
            });
        } else {
            serieGridEl.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Nenhuma série encontrada.</p>';
        }
    }
}

function createMovieCard(movie) {
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
        if (videoModal) {
            if (modalMovieTitle) modalMovieTitle.textCont
