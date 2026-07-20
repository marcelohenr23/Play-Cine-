// Banco de dados de filmes de exemplo
const movies = [
    { title: "Aventura no Espaço", genre: "Ficção", year: "2025", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80" },
    { title: "Sombras da Noite", genre: "Terror", year: "2024", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=300&q=80" },
    { title: "Amor Improvável", genre: "Romance", year: "2026", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80" },
    { title: "Velocidade Máxima", genre: "Ação", year: "2023", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=300&q=80" }
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
const newProfileName = document.getElementById('newProfileName');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const cancelProfileBtn = document.getElementById('cancelProfileBtn');
const currentProfileNameText = document.getElementById('currentProfileNameText');

// Elementos do Modal Personalizado de Alerta
const customModal = document.getElementById('customModal');
const modalMessage = document.getElementById('modalMessage');
const modalCloseBtn = document.getElementById('modalCloseBtn');

function showModal(message) {
    modalMessage.textContent = message;
    customModal.style.display = 'flex';
}

modalCloseBtn.addEventListener('click', () => {
    customModal.style.display = 'none';
});

// Elementos do Catálogo
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const catButtons = document.querySelectorAll('.cat-btn');

// Alternar entre tela de Login e Cadastro
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

// Ação de Cadastrar Conta
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    localStorage.setItem('playCine_name', name);
    localStorage.setItem('playCine_email', email);
    localStorage.setItem('playCine_password', password);

    // Cria um perfil inicial com o nome do usuário cadastrado se não houver perfis
    const defaultProfiles = [{ name: name }];
    localStorage.setItem('playCine_profiles', JSON.stringify(defaultProfiles));

    showModal('Conta criada com sucesso! Faça login para entrar.');
    registerForm.reset();
    registerForm.style.display = 'none';
    loginForm.style.display = 'flex';
});

// Ação de Entrar -> Vai para a tela de Seleção de Perfis
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
        
        // Garante que exista pelo menos um perfil padrão baseado no nome salvo
        let profiles = JSON.parse(localStorage.getItem('playCine_profiles'));
        if (!profiles || profiles.length === 0) {
            const userName = localStorage.getItem('playCine_name') || 'Convidado';
            profiles = [{ name: userName }];
            localStorage.setItem('playCine_profiles', JSON.stringify(profiles));
        }

        renderProfiles();
        profileScreen.style.display = 'flex';
    } else {
        showModal('E-mail ou senha incorretos! Acesso negado.');
    }
});

// Renderizar os perfis na tela "Quem está assistindo?"
function renderProfiles() {
    profilesGrid.innerHTML = '';
    const profiles = JSON.parse(localStorage.getItem('playCine_profiles')) || [];

    profiles.forEach(profile => {
        const card = document.createElement('div');
        card.classList.add('profile-card');
        
        // Pega a primeira letra do nome para o avatar
        const initial = profile.name.charAt(0).toUpperCase();

        card.innerHTML = `
            <div class="profile-avatar">${initial}</div>
            <span class="profile-name">${profile.name}</span>
        `;

        card.addEventListener('click', () => {
            currentProfileNameText.textContent = profile.name;
            profileScreen.style.display = 'none';
            mainSite.style.display = 'block';
            displayMovies(movies);
        });

        profilesGrid.appendChild(card);
    });
}

// Botões para adicionar novo perfil
btnAddProfileModal.addEventListener('click', () => {
    newProfileName.value = '';
    profileModal.style.display = 'flex';
});

cancelProfileBtn.addEventListener('click', () => {
    profileModal.style.display = 'none';
});

saveProfileBtn.addEventListener('click', () => {
    const nameVal = newProfileName.value.trim();
    if (!nameVal) {
        showModal('Digite um nome para o perfil.');
        return;
    }

    let profiles = JSON.parse(localStorage.getItem('playCine_profiles')) || [];
    profiles.push({ name: nameVal });
    localStorage.setItem('playCine_profiles', JSON.stringify(profiles));

    profileModal.style.display = 'none';
    renderProfiles();
});

// Função para exibir os filmes no catálogo
function displayMovies(movieArray) {
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

// Filtro da barra de pesquisa em tempo real
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(term) || movie.genre.toLowerCase().includes(term)
    );
    displayMovies(filteredMovies);
});

// Filtros por Categoria de Filmes
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
