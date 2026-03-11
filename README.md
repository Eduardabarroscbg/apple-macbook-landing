# 🍏 Clone da Landing Page do MacBook Pro

Um clone funcional e animado da landing page do MacBook Pro M4 da Apple,
desenvolvido para explorar modelagem 3D no desenvolvimento web com
Three.js, GSAP e React moderno.

## 📌 Sobre

Este projeto é uma implementação didática da página do MacBook Pro, com foco em:

- Integração e animação de modelos 3D com Three.js
- Transições suaves e animações baseadas em scroll com GSAP
- Gerenciamento de estado com Zustand para elementos interativos
- Design responsivo com Tailwind CSS
- Interface totalmente em Português 🇧🇷

Desenvolvido seguindo o tutorial de **Adrian Hajdin (JS Mastery)**,
adaptado e traduzido para o português.

## 🛠 Tecnologias

- **React** — Interface de usuário
- **Three.js** — Renderização 3D no navegador
- **GSAP** — Animações e scroll triggers
- **Zustand** — Gerenciamento de estado global
- **Tailwind CSS** — Estilização utilitária
- **Vite** — Bundler e servidor de desenvolvimento

## 🚀 Funcionalidades

- 💻 Modelos 3D interativos do MacBook (14" e 16")
- 🎨 Troca de cores em tempo real (Prateado e Preto Espacial)
- 📏 Alternância entre tamanhos 14" e 16"
- 🎞️ Animações de scroll com GSAP ScrollTrigger
- 📱 Layout responsivo para todos os tamanhos de tela
- 🇧🇷 Interface completamente em Português

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── models/
│   │   ├── Macbook-14.jsx
│   │   ├── Macbook-16.jsx
│   │   └── Macbook.jsx
│   ├── three/
│   │   ├── ModelSwitcher.jsx
│   │   └── StudioLights.jsx
│   ├── Footer.jsx
│   ├── Features.jsx
│   ├── Hero.jsx
│   ├── Highlights.jsx
│   ├── NavBar.jsx
│   ├── Performance.jsx
│   ├── ProductViewer.jsx
│   └── Showcase.jsx
├── constants/
│   └── index.js
├── store/
│   └── index.js
├── App.jsx
├── index.css
└── main.jsx
```

## 🔧 Como rodar

1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/SEU_REPO.git
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 📚 Créditos

Tutorial original por [Adrian Hajdin - JS Mastery](https://www.youtube.com/@javascriptmastery)