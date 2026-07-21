* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #0b0f19;
    color: #ffffff;
    min-height: 100vh;
}

/* Animação de Abertura */
.intro-splash {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0b0f19;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeOutSplash 0.5s ease 1.5s forwards;
}

.intro-logo {
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 2px;
}

.intro-logo .letter {
    color: #ffffff;
    opacity: 0;
    animation: fadeInLetter 0.4s ease forwards;
}

.intro-logo .letter:nth-child(1) { animation-delay: 0.1s; }
.intro-logo .letter:nth-child(2) { animation-delay: 0.2s; }
.intro-logo .letter:nth-child(3) { animation-delay: 0.3s; }
.intro-logo .letter:nth-child(4) { animation-delay: 0.4s; }
.intro-logo .letter:nth-child(5) { animation-delay: 0.5s; }
.intro-logo .letter:nth-child(6) { animation-delay: 0.6s; }
.intro-logo .letter:nth-child(7) { animation-delay: 0.7s; }
.intro-logo .letter:nth-child(8) { animation-delay: 0.8s; }

.intro-logo .highlight {
    color: #3b82f6;
}

@keyframes fadeInLetter {
    to {
        opacity: 1;
    }
}

@keyframes fadeOutSplash {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

/* Telas de Autenticação e Perfis */
.auth-container, .profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    background: #0b0f19;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

.auth-box, .profile-content {
    background-color: #141c2c;
    padding: 30px 20px;
    border-radius: 12px;
    width: 100%;
    max-width: 420px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.6);
    text-align: center;
    border: 1px solid #1a2234;
}

.brand-logo {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 25px;
    letter-spacing: 2px;
}

.brand-play { color: #ffffff; }
.brand-cine { color: #3b82f6; }

.auth-form {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.auth-form h3, .profile-content h2 {
    margin-bottom: 20px;
    font-size: 1.4rem;
    color: #fff;
}

.input-group {
    margin-bottom: 15px;
    text-align: left;
    width: 100%;
}

.input-group input {
    width: 100%;
    padding: 12px 14px;
    background-color: #0b0f19;
    border: 1px solid #253349;
    border-radius: 6px;
    color: white;
    font-size: 1rem;
    outline: none;
}

.input-group input:focus {
    border-color: #3b82f6;
}

.btn-primary {
    width: 100%;
    padding: 12px;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
}

.btn-secondary {
    width: 100%;
    padding: 12px;
    background: transparent;
    border: 1px dashed #3b82f6;
    color: #3b82f6;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    margin-top: 15px;
}

.auth-switch {
    margin-top: 20px;
    color: #8b9bb4;
    font-size: 0.85rem;
}

.auth-switch a {
    color: #3b82f6;
    text-decoration: none;
    font-weight: bold;
}

/* Perfis */
.profiles-grid {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin: 20px 0;
}

.profile-card {
    cursor: pointer;
    text-align: center;
}

.profile-avatar-wrapper {
    position: relative;
    width: 85px;
    height: 85px;
    margin-bottom: 8px;
}

.profile-avatar {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    border: 2px solid transparent;
}

.profile-card:hover .profile-avatar {
    border-color: #3b82f6;
}

.profile-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.edit-pencil-badge {
    position: absolute;
    bottom: 4px;
    right: 4px;
    background-color: rgba(11, 15, 25, 0.9);
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    border: 1px solid #3b82f6;
}

.profile-name {
    color: #8b9bb4;
    font-size: 0.9rem;
}

/* Modais Extras */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 300;
    padding: 16px;
}

.modal-box {
    background: #141c2c;
    padding: 22px;
    border-radius: 10px;
    width: 100%;
    max-width: 360px;
    text-align: center;
    border: 1px solid #1a2234;
}

.avatar-selector-grid {
    display: flex;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
    margin: 15px 0;
}

.avatar-selector-item {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
}

.avatar-selector-item.selected {
    border-color: #3b82f6;
}

.avatar-selector-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Site Principal & Header */
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 18px;
    background-color: rgba(11, 15, 25, 0.95);
    border-bottom: 1px solid #1a2234;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 15px;
}

.logo h1 {
    color: #fff;
    font-size: 1.4rem;
    letter-spacing: 1px;
}

.logo h1 span {
    color: #3b82f6;
}

.active-profile-badge {
    background: #141c2c;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    color: #8b9bb4;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #253349;
}

.search-box input {
    padding: 8px 14px;
    background: #141c2c;
    border: 1px solid #253349;
    color: white;
    border-radius: 6px;
    font-size: 0.9rem;
    width: 160px;
}

.search-box input:focus {
    outline: none;
    border-color: #3b82f6;
}

/* Hero Banner */
.hero {
    background: linear-gradient(to top, #0b0f19 0%, rgba(11,15,25,0.7) 100%), 
                url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80') center/cover;
    padding: 50px 18px;
    border-bottom: 1px solid #1a2234;
}

.hero-content h2 {
    font-size: 1.6rem;
    margin-bottom: 8px;
    color: #fff;
}

.hero-content p {
    color: #8b9bb4;
    font-size: 0.85rem;
    margin-bottom: 15px;
}

.hero-content .btn-primary {
    width: auto;
    padding: 8px 16px;
}

/* Categorias */
.categories-nav {
    display: flex;
    gap: 10px;
    padding: 15px 18px;
    overflow-x: auto;
}

.cat-btn {
    background: #141c2c;
    border: 1px solid #253349;
    color: #8b9bb4;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    white-space: nowrap;
    font-size: 0.9rem;
}

.cat-btn.active, .cat-btn:hover {
    background: #3b82f6;
    border-color: #3b82f6;
    color: white;
}

/* Catálogo */
.container {
    padding: 20px 18px;
    max-width: 1200px;
    margin: 0 auto;
}

.container h2 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: #fff;
}

.movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
}

.movie-card {
    background: #141c2c;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #1a2234;
}

.movie-card img {
    width: 100%;
    height: 260px; /* Altura ideal ajustada para capas de filmes verticais */
    object-fit: cover;
    display: block;
}

.movie-info {
    padding: 10px;
}

.movie-info h3 {
    font-size: 0.9rem;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
}

.movie-info span {
    color: #8b9bb4;
    font-size: 0.8rem;
}

footer {
    text-align: center;
    padding: 30px;
    color: #64748b;
    font-size: 0.8rem;
    border-top: 1px solid #1a2234;
        }
