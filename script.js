// Banco de dados de filmes atualizado com capas oficiais verticais
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

// Função para renderizar os filmes na tela
function renderMovies(movieArray) {
    const movieGrid = document.getElementById('movieGrid');
    if (!movieGrid) return;
    
    movieGrid.innerHTML = '';
    
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
        movieGrid.appendChild(card);
    });
}

// Inicializador principal do site
document.addEventListener('DOMContentLoaded', () => {
    // Carrega os filmes inicialmente
    renderMovies(movies);

    // Sistema de busca no catálogo
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filteredMovies = movies.filter(movie => 
                movie.title.toLowerCase().includes(query) || 
                movie.genre.toLowerCase().includes(query)
            );
            renderMovies(filteredMovies);
        });
    }

    // Sistema de navegação por categorias
    const catButtons = document.querySelectorAll('.cat-btn');
    catButtons.forEach(button => {
        button.addEventListener('click', () => {
            catButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.textContent.trim();
            if (category === 'Todos') {
                renderMovies(movies);
            } else {
                const filteredMovies = movies.filter(movie => movie.genre === category);
                renderMovies(filteredMovies);
            }
        });
    });
});
