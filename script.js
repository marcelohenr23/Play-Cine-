const movies = [
    { title: "Jack o Caçador de Gigantes", genre: "Aventura", year: "2013", image: "img/jackgigante.jpg", videoUrl: "https://fembed.sx/e/81005-dub", description: "Uma antiga guerra entra em erupção novamente quando um jovem fazendeiro abre involuntariamente um portal entre nosso mundo e uma raça de gigantes aterrorizantes." },
    { title: "Missão Pandora", genre: "Ficção", year: "2024", image: "img/1.jpg", videoUrl: "https://fembed.sx/e/1056569-dub", description: "Em uma missão de alto risco em território desconhecido, agentes precisam lutar contra o tempo para recuperar um artefato tecnológico." },
    { title: "Águas Que Corroem", genre: "Terror", year: "2024", image: "img/agu.jpg", videoUrl: "https://fembed.sx/e/561362-dub", description: "Um grupo de amigos explora uma área isolada de águas profundas e descobre uma presença maligna à espreita." },
    { title: "Caça-Fantasmas", genre: "Comédia", year: "2016", image: "img/caca.jpg", videoUrl: "", description: "Com equipes de investigadores paranormais estreantes, Nova York é salva por um grupo hilário e corajoso." },
    { title: "Caçada Sem Regras", genre: "Ação", year: "2023", image: "img/cacada.jpg", videoUrl: "", description: "Em um jogo de gato e rato implacável, um ex-agente precisa proteger sua família contra mercenários." },
    { title: "Furioza 2", genre: "Ação", year: "2024", image: "img/fuu.jpg", videoUrl: "", description: "A continuação eletrizante repleta de confrontos sangrentos e alianças perigosas no submundo do crime." },
    { title: "Gigantes de Aço", genre: "Ficção", year: "2011", image: "img/giga.jpg", videoUrl: "", description: "Em um futuro próximo onde robôs combatem no ringue, um ex-lutador tenta uma nova chance treinando uma máquina obsoleta." },
    { title: "Guerra Primitiva", genre: "Ação", year: "2024", image: "img/gu.jpg", videoUrl: "", description: "Soldados em missões hostis se deparam com ameaças primordiais ferozes e implacáveis." },
    { title: "A Primeira Noite de Crime", genre: "Terror", year: "2018", image: "img/noi.jpg", videoUrl: "", description: "Para baixar a taxa de criminalidade para o resto do ano, os novos founding fathers testam uma teoria sociológica em uma ilha isolada." },
    { title: "Jovens Titãs: O Contrato de Judas", genre: "Animação", year: "2017", image: "img/tita.jpg", videoUrl: "", description: "Os Titãs recebem uma nova integrante, mas segredos obscuros ameaçam destruir a equipe por dentro." },
    { title: "Caçador de Tormentas", genre: "Ação", year: "2023", image: "img/to.jpg", videoUrl: "", description: "Perseguindo furacões mortais, um grupo percebe que há criminosos usando o caos climáticos para encobrir assaltos." },
    { title: "Uma História de Vingança", genre: "Ação", year: "2017", image: "img/vi.jpg", videoUrl: "", description: "Após uma tragédia pessoal, um homem busca implacavelmente os responsáveis por destruir sua vida." },
    { title: "Ong-Bak 2", genre: "Ação", year: "2008", image: "img/ongbak2.jpg", videoUrl: "https://fembed.sx/e/16353-dub", description: "Traído e vendido como escravo, um jovem guerreiro busca dominar artes marciais lendárias para sua vingança." },
    { title: "Ong-Bak 3", genre: "Ação", year: "2010", image: "img/ongbak3 (1).jpg", videoUrl: "https://fembed.sx/e/43209-dub", description: "A conclusão épica da jornada de artes marciais, enfrentando o destino e o renascimento espiritual." },
    { title: "Assalto à Casa Blanca", genre: "Ação", year: "2013", image: "img/assaltoacasabranca.jpg", videoUrl: "", description: "Uma operação altamente coordenada coloca a segurança nacional em risco extremo." },
    { title: "Busca Explosiva 4", genre: "Ação", year: "2023", image: "img/buscaexplosiva4.jpg", videoUrl: "", description: "Tiroteios intensos e missões suicidas marcam o retorno deste grupo inconfundível de mercenários." },
    { title: "Força Bruta: Punição", genre: "Ação", year: "2024", image: "img/forcabrutapunicao.jpg", videoUrl: "", description: "Detetives durões entram em ação para desmantelar uma rede perigosa de crimes cibernéticos e extorsão." },
    { title: "Força Bruta: Sem Saída", genre: "Ação", year: "2022", image: "img/forcabrutasemsaida.jpg", videoUrl: "", description: "A lei do mais forte impera quando a polícia decide caçar criminosos internacionais sem seguir protocolos." },
    { title: "O Valente", genre: "Ação", year: "2023", image: "img/ovalente.jpg", videoUrl: "", description: "Um homem comum descobre sua verdadeira coragem ao enfrentar uma facção criminosa local." },
    { title: "Plano de Família 2", genre: "Ação", year: "2024", image: "img/planodefamilia2.jpg", videoUrl: "", description: "Um ex-assassino pacato é arrastado de volta ao passado mortal durante o que deveria ser uma viagem comum de férias." },
    { title: "Quem Morre", genre: "Terror", year: "2023", image: "img/quemmorre.jpg", videoUrl: "", description: "Um jogo de sobrevivência sádico coloca amigos uns contra os outros em uma mansão trancada." },
    { title: "Red: Aposentados e Perigosos", genre: "Ação", year: "2010", image: "img/redaposentado.jpg", videoUrl: "", description: "Ex-agentes da CIA aposentados precisam se reunir após serem marcados para morrer por uma conspiração." },
    { title: "Sicario", genre: "Ação", year: "2015", image: "img/sicario.jpg", videoUrl: "", description: "Uma agente do FBI idealista é alistada por uma força-tarefa governamental para combater o cartel na fronteira." },
    { title: "Superman: O Retorno", genre: "Ficção", year: "2006", image: "img/oretorno.jpg", videoUrl: "", description: "O Homem de Aço retorna à Terra após uma longa ausência e precisa lidar com um mundo que seguiu em frente sem ele." },
    { title: "Caçada Sangrenta", genre: "Ação", year: "2024", image: "img/cacadasangrenta.jpg", videoUrl: "https://fembed.sx/e/1084222-dub", description: "Uma perseguição implacável transforma uma floresta isolada em uma zona de guerra brutal." },
    { title: "Cores da Justiça", genre: "Ação", year: "2024", image: "img/coresdajustica.jpg", videoUrl: "https://fembed.sx/e/578189-dub", description: "Policiais enfrentam dilemas morais profundos em meio à corrupção sistêmica na cidade." },
    { title: "Gamer", genre: "Ação", year: "2009", image: "img/gamer.jpg", videoUrl: "https://fembed.sx/e/18501-dub", description: "Em um futuro onde prisioneiros são controlados por humanos em um jogo online de tiro, um lutador busca sua liberdade." },
    { title: "Johnny English", genre: "Comédia", year: "2003", image: "img/jonyingles.jpg", videoUrl: "https://fembed.sx/e/463272-dub", description: "O agente secreto mais desastrosos do mundo precisa salvar as Joias da Coroa britânica por pura sorte." },
    { title: "O Ataque dos 6 Tubarões", genre: "Terror", year: "2021", image: "img/oataquedos6tubaroes.jpg", videoUrl: "https://fembed.sx/e/522438-dub", description: "Visitantes em uma instalação de pesquisa científica isolada lutam para sobreviver a criaturas mutantes." },
    { title: "A Guerra do Amanhã", genre: "Ficção", year: "2021", image: "img/tomorow.jpg", videoUrl: "", description: "Viajantes do tempo chegam do ano 2051 para entregar uma mensagem urgente: a humanidade está perdendo uma guerra global." },
    { title: "Ambulância: Um Dia de Crime", genre: "Ação", year: "2022", image: "img/ambulancia.jpg", videoUrl: "https://fembed.sx/e/763285", description: "Dois irmãos adotivos executam um assalto a banco que dá errado e sequestram uma ambulância para fugir." },
    { title: "Beekeeper: Rede de Vingança", genre: "Ação", year: "2024", image: "img/beekeeper.jpg", videoUrl: "https://fembed.sx/e/866398", description: "A brutal campanha de vingança de um homem assume riscos nacionais quando se descobre que ele é um ex-agente secreto." },
    { title: "Code 8: Renegados", genre: "Ficção", year: "2019", image: "img/code8.png", videoUrl: "https://fembed.sx/e/461130-dub", description: "Em um mundo onde pessoas com superpoderes vivem na margem da sociedade, um jovem recorre ao crime para salvar sua mãe." },
    { title: "iBoy", genre: "Ação", year: "2017", image: "img/iboy.jpg", videoUrl: "https://fembed.sx/e/414190-dub", description: "Após um incidente com fragmentos de celular em seu cérebro, um adolescente ganha superpoderes tecnológicos." },
    { title: "Legado Explosivo", genre: "Ação", year: "2020", image: "img/legadoexplosivo.webp", videoUrl: "https://fembed.sx/e/553604-dub", description: "Um gênio da engenharia planeja invadir o cofre mais intransponível do mundo durante a Copa do Mundo." },
    { title: "Operação Fronteira", genre: "Ação", year: "2019", image: "img/operacaofroteira.jpg", videoUrl: "https://fembed.sx/e/399361", description: "Cinco ex-veteranos das Forças Armadas se reúnem para roubar a fortuna de um poderoso chefão do narcotráfico." },
    { title: "Em Ritmo de Fuga", genre: "Ação", year: "2017", image: "img/em ritmo de fuga.jpg", videoUrl: "https://fembed.sx/e/339403", description: "Um jovem motorista de fuga talentoso confia na trilha sonora perfeita para ser o melhor no que faz." },
    { title: "Implacável", genre: "Ação", year: "2021", image: "img/implacavel.jpg", videoUrl: "https://fembed.sx/e/534490-dub", description: "Uma jornada implacável de justiça com sequências intensas de perseguição e combate." },
    { title: "Sem Limite", genre: "Ação", year: "2011", image: "img/semlimite.jpg", videoUrl: "https://fembed.sx/e/1138749-dub", description: "Um escritor frustrado toma uma pílula revolucionária que destrava 100% da capacidade cerebral." },
    { title: "Vingança", genre: "Ação", year: "2019", image: "img/vinganca.jpg", videoUrl: "https://fembed.sx/e/1195518-dub", description: "Uma caçada implacável pelo submundo do crime em busca de reparação e acerto de contas." },
    { title: "Avatar", genre: "Aventura", year: "2009", image: "img/avata1.jpg", videoUrl: "https://fembed.sx/e/19995-dub", description: "Um fuzileiro naval paraplégico é enviado à lua Pandora em uma missão única, dividindo-se entre ordens e sua nova tribo." },
    { title: "Avatar: O Caminho da Água", genre: "Aventura", year: "2022", image: "img/avata2.jpg", videoUrl: "https://fembed.sx/e/76600-dub", description: "Jake Sully vive com sua família em Pandora, protegendo seus laços contra uma nova ameaça humana." },
    { title: "Avatar 3", genre: "Aventura", year: "2025", image: "img/avata3.jpg", videoUrl: "https://fembed.sx/e/83533-dub", description: "Novas culturas e desafios aguardam o clã em territórios inexplorados de Pandora." },
    { title: "A Chamada", genre: "Ação", year: "2023", image: "img/achamada.jpg", videoUrl: "https://fembed.sx/e/762430-dub", description: "Uma ligação misteriosa conecta duas pessoas em linhas temporais diferentes com consequências fatais." },
    { title: "Resgate", genre: "Ação", year: "2020", image: "img/resgate1.jpg", videoUrl: "https://fembed.sx/e/545609-dub", description: "Um mercenário destemido do mercado negro embarca em uma missão suicida para resgatar o filho sequestrado de um lorde do crime." },
    { title: "Resgate 2", genre: "Ação", year: "2023", image: "img/resgate2.jpg", videoUrl: "https://fembed.sx/e/697843-dub", description: "Após quase morrer na primeira missão, Tyler Rake retorna para resgatar a família de um implacável gângster." }
];

const series = [
    { 
        title: "O Dia do Chacal", 
        genre: "Thriller", 
        year: "2024", 
        image: "img/chacal.jpg", 
        isSeries: true,
        description: "Um assassino profissional altamente qualificado conhecido como O Chacal assume seu contrato mais desafiador.",
        seasons: {
            "1": [
                { epNum: 1, title: "Episódio 1", duration: "50m", desc: "O Chacal se prepara para seu próximo grande alvo.", videoUrl: "https://fembed.sx/e/222766" },
                { epNum: 2, title: "Episódio 2", duration: "52m", desc: "A inteligência começa a rastrear os passos do assassino.", videoUrl: "https://fembed.sx/e/222766" }
            ]
        }
    },
    { 
        title: "Avatar: O Último Mestre do Air", 
        genre: "Aventura", 
        year: "2024", 
        image: "img/avata.jpg", 
        isSeries: true,
        description: "Um jovem Avatar deve aprender a dominar os quatro elementos para salvar um mundo dividido pela guerra.",
        seasons: {
            "1": [
                { epNum: 1, title: "Aang", duration: "1h 2m", desc: "Um Dobrador de ar precisa se adaptar à sua nova realidade quando a guerra começa.", videoUrl: "https://betterflix.lat/api/player?id=82452&type=tv&season=1&episode=1" },
                { epNum: 2, title: "Guerreiros", duration: "54m", desc: "O grupo chega à Ilha Kyoshi e enfrenta novos perigos.", videoUrl: "https://betterflix.lat/api/player?id=82452&type=tv&season=1&episode=2" }
            ]
        }
    },
    { 
        title: "Capoeiras", 
        genre: "Ação", 
        year: "2024", 
        image: "img/capoeiras.jpg", 
        isSeries: true,
        description: "A arte marcial tradicional serve de base para combates intensos e estratégias de sobrevivência urbana.",
        seasons: {
            "1": [
                { epNum: 1, title: "Episódio 1", duration: "45m", desc: "Introdução ao mundo clandestino das lutas.", videoUrl: "" }
            ]
        }
    },
    { 
        title: "Coragem, Irmão!", 
        genre: "Ação", 
        year: "2024", 
        image: "img/coragemirmao.jpg", 
        isSeries: true,
        description: "Dois irmãos enfrentam dilemas morais e inimigos impiedosos para proteger o que restou da família.",
        seasons: {
            "1": [
                { epNum: 1, title: "Episódio 1", duration: "50m", desc: "Uma aliança inesperada é formada.", videoUrl: "" }
            ]
        }
    }
];

const topSeries = [
    { 
        title: "O Dia do Chacal", 
        genre: "Thriller", 
        year: "2024", 
        image: "img/chacal.jpg", 
        isSeries: true,
        description: "Um assassino profissional altamente qualificado conhecido como O Chacal assume seu contrato mais desafiador.",
        seasons: {
            "1": [
                { epNum: 1, title: "Episódio 1", duration: "50m", desc: "O Chacal se prepara para seu próximo grande alvo.", videoUrl: "https://fembed.sx/e/222766" }
            ]
        }
    },
    { 
        title: "Avatar: O Último Mestre do Air", 
        genre: "Aventura", 
        year: "2024", 
        image: "img/avata.jpg", 
        isSeries: true,
        description: "Um jovem Avatar deve aprender a dominar os quatro elementos para salvar um mundo dividido pela guerra.",
        seasons: {
            "1": [
                { epNum: 1, title: "Aang", duration: "1h 2m", desc: "Um Dobrador de ar precisa se adaptar à sua nova realidade quando a guerra começa.", videoUrl: "https://betterflix.lat/api/player?id=82452&type=tv&season=1&episode=1" }
            ]
        }
    }
];

const premiumMovies = [
    { title: "Chaves 24 Horas", genre: "Comédia", year: "2026", image: "img/chaves.jpg", videoUrl: "https://ww4.embedtv.lat/24h_chaves", isPremium: true, description: "Transmissão contínua 24 horas com os melhores momentos da vila mais famosa da TV." },
    { title: "Todo Mundo Odeia o Chris", genre: "Comédia", year: "2026", image: "img/chris.jpg", videoUrl: "https://ww4.embedtv.lat/24h_odeiachris", isPremium: true, description: "As confusões clássicas da juventude de Chris no Brooklyn." }
];

window.addEventListener('DOMContentLoaded', () => {
    setupSplashIntro();
    renderMovies();
    setupSearchAndFilter();
    setupVideoModal();
    setupMobileMenu();
});

function setupSplashIntro() {
    const splash = document.getElementById('introSplash');
    if (splash) {
        setTimeout(() => {
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.style.display = 'none';
            }, 500);
        }, 1500);
    }
}

function renderMovies(filteredMovies = movies, filteredSeries = series) {
    const movieGridEl = document.getElementById('movieGrid');
    const serieGridEl = document.getElementById('serieGrid');
    const recentGridEl = document.getElementById('recentMovieGrid');
    const topSerieGridEl = document.getElementById('topSerieGrid');
    const premiumGridEl = document.getElementById('premiumGrid');

    if (movieGridEl) movieGridEl.innerHTML = '';
    if (serieGridEl) serieGridEl.innerHTML = '';
    if (recentGridEl) recentGridEl.innerHTML = '';
    if (topSerieGridEl) topSerieGridEl.innerHTML = '';
    if (premiumGridEl) premiumGridEl.innerHTML = '';

    if (recentGridEl) {
        filteredMovies.slice(0, 4).forEach(movie => {
            recentGridEl.appendChild(createMovieCard(movie));
        });
    }

    if (movieGridEl) {
        filteredMovies.forEach(movie => {
            movieGridEl.appendChild(createMovieCard(movie));
        });
    }

    if (serieGridEl) {
        filteredSeries.forEach(serie => {
            serieGridEl.appendChild(createMovieCard(serie));
        });
    }

    if (topSerieGridEl) {
        topSeries.forEach(serie => {
            topSerieGridEl.appendChild(createMovieCard(serie));
        });
    }

    if (premiumGridEl) {
        premiumMovies.forEach(movie => {
            premiumGridEl.appendChild(createMovieCard(movie));
        });
    }
}

function createMovieCard(item) {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    const lockIcon = item.isPremium ? `<div style="position: absolute; top: 10px; right: 10px; background: rgba(0, 0, 0, 0.7); color: #ffd700; padding: 8px; border-radius: 50%; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px;"><i class="fa-solid fa-lock"></i></div>` : '';

    card.innerHTML = `
        <div style="position: relative;">
            <img src="${item.image}" alt="${item.title}" loading="lazy" style="width: 100%; border-radius: 8px; display: block;">
            ${lockIcon}
        </div>
        <div class="movie-info" style="margin-top: 5px;">
            <h4 style="color: white; font-size: 0.9rem; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.title}</h4>
            <span style="color: #888; font-size: 0.8rem;">${item.genre} • ${item.year}</span>
        </div>
    `;

    card.addEventListener('click', () => {
        const videoModal = document.getElementById('videoModal');
        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalMovieTitle = document.getElementById('modalMovieTitle');
        const modalMovieDesc = document.getElementById('modalMovieDesc');
        const modalMetadata = document.getElementById('modalMetadata');
        const playBtn = document.getElementById('playButton');
        const moviePlayer = document.getElementById('moviePlayer');
        const playerContainer = document.getElementById('playerContainer');
        const detailsContainer = document.getElementById('modalDetailsContainer');
        const serieEpisodesSection = document.getElementById('serieEpisodesSection');
        const episodesList = document.getElementById('episodesList');
        const seasonSelect = document.getElementById('seasonSelect');

        if (videoModal) {
            modalBackdrop.src = item.image;
            modalMovieTitle.textContent = item.title;
            modalMetadata.textContent = `${item.year} • ${item.genre}`;
            modalMovieDesc.textContent = item.description || "Sem descrição disponível.";

            detailsContainer.style.display = 'block';
            playerContainer.style.display = 'none';
            moviePlayer.src = '';

            // Verifica se é Série ou Filme
            if (item.isSeries && item.seasons) {
                if (playBtn) playBtn.style.display = 'none';
                if (serieEpisodesSection) serieEpisodesSection.style.display = 'block';

                if (seasonSelect) {
                    seasonSelect.innerHTML = '';
                    Object.keys(item.seasons).forEach
