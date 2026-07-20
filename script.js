// Banco de dados de filmes de exemplo
const movies = [
    { title: "Aventura no Espaço", genre: "Ficção", year: "2025", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80" },
    { title: "Sombras da Noite", genre: "Terror", year: "2024", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=300&q=80" },
    { title: "Amor Improvável", genre: "Romance", year: "2026", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80" },
    { title: "Velocidade Máxima", genre: "Ação", year: "2023", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=300&q=80" }
];

// Elementos da Tela
const authScreen = document.getElementById('authScreen');
const mainSite = document.getElementById('mainSite');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterBtn = document.getElementById('showRegister');
const showLoginBtn = document.getElementById('showLogin');

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

// Ação de Cadastrar Conta (Salva no navegador do celular)
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    localStorage.setItem('playCine_name', name);
    localStorage.setItem('playCine_email', email);
    localStorage.setItem('playCine_password', password);

    alert('Conta criada com sucesso! Faça login para entrar.');
    registerForm.reset();
    registerForm.style.display = 'none';
    loginForm.style.display = 'flex';
});

// Ação de Entrar (Valida se a conta existe e se a senha está correta)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('loginEmail').value;
    const passwordInput = document.getElementById('loginPassword').value;

    const savedEmail = localStorage.getItem('playCine_email');
    const savedPassword = localStorage.getItem('playCine_password');

    // Se não houver cadastro prévio no celular, avisa o usuário
    if (!savedEmail) {
        alert('Nenhuma conta encontrada! Por favor, clique em "Cadastre-se" primeiro.');
        return;
    }

    // Validação de segurança: se errar o e-mail ou a senha, bloqueia o acesso
    if (emailInput === savedEmail && passwordInput === savedPassword) {
        authScreen.style.display = 'none';
        mainSite.style.display = 'block';
        displayMovies(movies);
    } else {
        alert('E-mail ou senha incorretos! Acesso negado.');
    }
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
