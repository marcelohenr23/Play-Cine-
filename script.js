// Banco de dados simulado de filmes com capas oficiais e formato padrão
const movies = [
    { 
        title: "Interestelar", 
        genre: "Ficção", 
        year: "2014", 
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" 
    },
    { 
        title: "Vingadores: Ultimato", 
        genre: "Ação", 
        year: "2019", 
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" 
    },
    { 
        title: "A Freira", 
        genre: "Terror", 
        year: "2018", 
        image: "https://image.tmdb.org/t/p/w500/sFCtcrpo6WHdaXN4dGZ9M3tVf86.jpg" 
    },
    { 
        title: "Diário de uma Paixão", 
        genre: "Romance", 
        year: "2004", 
        image: "https://image.tmdb.org/t/p/w500/rNzgtqGbqjKgx4JmR5qfE1M0S9x.jpg" 
    },
    { 
        title: "Homem-Aranha: Através do Aranhaverso", 
        genre: "Animação", 
        year: "2023", 
        image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg" 
    },
    { 
        title: "Oppenheimer", 
        genre: "Drama", 
        year: "2023", 
        image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg" 
    }
];

// Função para exibir os filmes no catálogo
function renderMovies(movieArray) {
    const grid = document.getElementById('movieGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    movieArray.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span>${movie.genre} • ${movie.year}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Inicialização completa ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza o catálogo inicial de filmes
    renderMovies(movies);

    // Sistema de busca por nome
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = movies.filter(m => m.title.toLowerCase().includes(term));
            renderMovies(filtered);
        });
    }

    // Sistema de categorias
    const catButtons = document.querySelectorAll('.cat-btn');
    catButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            catButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            if (!category || category === 'Todos') {
                renderMovies(movies);
            } else {
                const filtered = movies.filter(m => m.genre === category);
                renderMovies(filtered);
            }
        });
    });

    // Controle básico de transição de telas (Login / Cadastro / Perfis / Início)
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Esconde a tela de login e avança (ajuste conforme os IDs do seu HTML)
            const authContainer = document.querySelector('.auth-container');
            if (authContainer) authContainer.style.display = 'none';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const authContainer = document.querySelector('.auth-container');
            if (authContainer) authContainer.style.display = 'none';
        });
    }
});
