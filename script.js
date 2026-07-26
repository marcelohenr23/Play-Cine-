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
  { title: "Avatar: O Último Mestre do Air", genre: "Aventura", year: "2024", image: "img/avata.jpg", videoUrl: "" },
  { title: "Capoeiras", genre: "Ação", year: "2024", image: "img/capoeiras.jpg", videoUrl: "" },
  { title: "O Dia do Chacal", genre: "Thriller", year: "2024", image: "img/chacal.jpg", videoUrl: "" },
  { title: "Coragem, Irmão!", genre: "Ação", year: "2024", image: "img/coragemirmao.jpg", videoUrl: "" }
];

const topSeries = [
  { title: "Punho de Ferro", genre: "Ação", year: "2017", image: "img/punhodeferro.jpg", videoUrl: "" },
  { title: "Walker", genre: "Drama", year: "2021", image: "img/walker.jpg", videoUrl: "" }
];

const premiumContent = [
  { title: "Cazé TV", genre: "Esportes", year: "AO VIVO", image: "img/cazetv.jpg", videoUrl: "" },
  { title: "GE TV", genre: "Esportes", year: "AO VIVO", image: "img/getv.jpg", videoUrl: "" },
  { title: "SporTV", genre: "Esportes", year: "AO VIVO", image: "img/sportv.jpg", videoUrl: "" }
];

window.addEventListener('DOMContentLoaded', () => {
    renderMovies();
    setupSearchAndFilter();
    setupVideoModal();
});

function renderMovies(filteredMovies = movies, filteredSeries = series, filteredTopSeries = topSeries, filteredPremium = premiumContent) {
    const movieGridEl = document.getElementById('movieGrid');
    const serieGridEl = document.getElementById('serieGrid');
    const topSerieGridEl = document.getElementById('topSerieGrid');
    const premiumGridEl = document.getElementById('premiumGrid');
    const recentGridEl = document.getElementById('recentMovieGrid');

    if (movieGridEl) movieGridEl.innerHTML = '';
    if (serieGridEl) serieGridEl.innerHTML = '';
    if (topSerieGridEl) topSerieGridEl.innerHTML = '';
    if (premiumGridEl) premiumGridEl.innerHTML = '';
    if (recentGridEl) recentGridEl.innerHTML = '';

    // Lançamentos Recentes (Pega os 4 primeiros)
    if (recentGridEl) {
        filteredMovies.slice(0, 4).forEach(movie => {
            recentGridEl.appendChild(createMovieCard(movie));
        });
    }

    // Filmes
    if (movieGridEl) {
        if (filteredMovies.length > 0) {
            filteredMovies.forEach(movie => {
                movieGridEl.appendChild(createMovieCard(movie));
            });
        } else {
            movieGridEl.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888;">Nenhum filme encontrado.</p>';
        }
    }

    // Séries
    if (serieGridEl) {
        if (filteredSeries.length > 0) {
            filteredSeries.forEach(serie => {
                serieGridEl.appendChild(createMovieCard(serie));
            });
        } else {
            serieGridEl.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888;">Nenhuma série encontrada.</p>';
        }
    }

    // Tops Séries
    if (topSerieGridEl) {
        if (filteredTopSeries.length > 0) {
            filteredTopSeries.forEach(topSerie => {
                topSerieGridEl.appendChild(createMovieCard(topSerie));
            });
        } else {
            topSerieGridEl.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888;">Nenhuma top série encontrada.</p>';
        }
    }

    // Conteúdo Premium (Passando `true` para ativar o cadeado e bloqueio)
    if (premiumGridEl) {
        if (filteredPremium.length > 0) {
            filteredPremium.forEach(item => {
                premiumGridEl.appendChild(createMovieCard(item, true));
            });
        } else {
            premiumGridEl.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888;">Nenhum conteúdo premium encontrado.</p>';
        }
    }
}

function createMovieCard(item, isPremium = false) {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.style.position = 'relative';

    // Adiciona o ícone de cadeado se for premium
    let lockHtml = isPremium ? '<div style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: #ffd700; padding: 6px 8px; border-radius: 50%; font-size: 0.9rem; z-index: 2;"><i class="fa-solid fa-lock"></i></div>' : '';

    card.innerHTML = `
        ${lockHtml}
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="movie-info">
            <h4>${item.title}</h4>
            <span>${item.genre} • ${item.year}</span>
        </div>
    `;

    card.addEventListener('click', () => {
        if (isPremium) {
            alert("Este conteúdo é Premium e está bloqueado!");
            return;
        }

        const videoModal = document.getElementById('videoModal');
        const modalMovieTitle = document.getElementById('modalMovieTitle');
        const modalMovieDesc = document.getElementById('modalMovieDesc');
        const moviePlayer = document.getElementById('moviePlayer');

        if (videoModal) {
            if (modalMovieTitle) modalMovieTitle.textContent = item.title;
            if (modalMovieDesc) modalMovieDesc.textContent = `${item.genre} • ${item.year}`;
            if (moviePlayer) moviePlayer.src = item.videoUrl || '';
            videoModal.style.display = 'flex';
        }
    });

    return card;
}

function setupSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const searchedMovies = movies.filter(m => m.title.toLowerCase().includes(query) || m.genre.toLowerCase().includes(query));
            const searchedSeries = series.filter(s => s.title.toLowerCase().includes(query) || s.genre.toLowerCase().includes(query));
            const searchedTopSeries = topSeries.filter(ts => ts.title.toLowerCase().includes(query) || ts.genre.toLowerCase().includes(query));
            const searchedPremium = premiumContent.filter(p => p.title.toLowerCase().includes(query) || p.genre.toLowerCase().includes(query));
            renderMovies(searchedMovies, searchedSeries, searchedTopSeries, searchedPremium);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            if (category === 'all') {
                renderMovies(movies, series, topSeries, premiumContent);
            } else {
                const filteredM = movies.filter(m => m.genre === category);
                const filteredS = series.filter(s => s.genre === category);
                const filteredTS = topSeries.filter(ts => ts.genre === category);
                const filteredP = premiumContent.filter(p => p.genre === category);
                renderMovies(filteredM, filteredS, filteredTS, filteredP);
            }
        });
    });
}

function setupVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const closeVideoModalBtn = document.getElementById('closeVideoModal');
    const moviePlayer = document.getElementById('moviePlayer');

    if (closeVideoModalBtn && videoModal) {
        closeVideoModalBtn.addEventListener('click', () => {
            videoModal.style.display = 'none';
            if (moviePlayer) moviePlayer.src = '';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            if (moviePlayer) moviePlayer.src = '';
        }
    });
   }
