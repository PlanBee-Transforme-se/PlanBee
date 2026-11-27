// JavaScript do PlanBee

// Componente da Sidebar

const sidebarHTML = `
	<div class="logo">
				<img src="../assets/images/Logo PlanBee 1.svg" alt="logo-PlanBee">
				<p>Planejamento de Eventos</p>
			</div>

			<nav aria-label="Menu principal">
				<ul>
					<li>
						<a class="nav-link" href="dashboard.html" aria-current="page">
							<i data-lucide="house"></i>
							Início
						</a>
					</li>

					<li>
						<a class="nav-link" href="eventos.html">
							<i data-lucide="calendar-days"></i>
							Eventos
						</a>
					</li>

					<li>
						<a class="nav-link" href="planejamento.html">
							<i data-lucide="layers"></i>
							Planejamento
						</a>
					</li>

					<li>
						<a class="nav-link" href="orcamento.html">
							<i data-lucide="circle-dollar-sign"></i>
							Orçamento
						</a>
					</li>
				</ul>
			</nav>

			<nav class="sidebar-bottom" aria-label="Menu secundário">
				<ul>
					<li>
						<a class="nav-link" href="sobre.html">
							<i data-lucide="users"></i>
							Sobre
						</a>
					</li>

					<li>
						<a class="nav-link" href="configuracoes.html">
							<i data-lucide="settings"></i>
							Configurações
						</a>
					</li>
				</ul>
			</nav>
			<div class="sidebar-mascote">
				<img src="../assets/images/Abelha Mascote de Eventos Académicos 1.png" alt="Mascote do PlanBee">
			</div>

`;

// Componente do Cabeçalho

const headerHTML = `
	<div class="breadcrumb">
					<i data-lucide="house"></i>
					<strong id="pagina-atual">Início</strong>
					<span>/</span>
					<span>Painel geral</span>
				</div>

				<div class="search-box">
					<i data-lucide="search"></i>

					<input type="search" aria-label="Buscar evento ou tarefa" placeholder="Buscar evento, tarefa...">

					<span class="keyboard-shortcut">Ctrl + K</span>
				</div>

				<div class="profile-area">

					<button class="notification-button" type="button" aria-label="Notificações">
						<i data-lucide="bell"></i>
					</button>

					<button class="profile-button" type="button">
						<div class="avatar">
							<i data-lucide="user-round"></i>
						</div>
						<span>Usuario</span>
						<i data-lucide="chevron-down"></i>
					</button>

				</div>
`;

// Componente do Rodapé

const footerHTML = `
	<p>PlanBee • Planejamento de Eventos</p>

    <nav aria-label="Navegação do rodapé">
        <ul class="footer-links">
            <li><button type="button">Ajuda</button></li>
            <li><button type="button">Feedback</button></li>
            <li><button type="button">Termos</button></li>
            <li><button type="button">Privacidade</button></li>
        </ul>
    </nav>

`;

// Carregamento dos componentes

const sidebar = document.querySelector("#sidebar");
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

if (sidebar) {
    sidebar.innerHTML = sidebarHTML;
}

if (header) {
    header.innerHTML = headerHTML;
}

if (footer) {
    footer.innerHTML = footerHTML;
}

// Identificação da página ativa


const links = document.querySelectorAll(".sidebar .nav-link");

links.forEach((link) => {
    if (link.pathname === window.location.pathname) {
        link.setAttribute("aria-current", "page");
    } else {
        link.removeAttribute("aria-current");
    }
});

// Inicialização dos ícones

if (typeof lucide !== "undefined") {
    lucide.createIcons();
}