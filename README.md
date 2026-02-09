# 🌐 SystemNet - Landing Page

Uma landing page moderna e responsiva desenvolvida para a empresa **SystemNet**, apresentando soluções empresariais e depoimentos de clientes de forma profissional e atrativa.

## 📋 Sobre o Projeto

Este projeto é uma aplicação web de página única (SPA) construída com **React** e **Vite**, oferecendo uma experiência de usuário fluida e agradável. A página apresenta informações sobre os serviços da SystemNet, depoimentos de clientes, e inclui uma seção institucional completa.

## ✨ Funcionalidades

- ✅ **Navbar responsiva** com navegação suave
- ✅ **Seções dinâmicas** com apresentação de serviços
- ✅ **Depoimentos de clientes** com imagens
- ✅ **Cards informativos** para apresentar produtos/serviços
- ✅ **Design responsivo** que funciona em todos os dispositivos
- ✅ **Animações suaves** com reveal effects
- ✅ **Footer** com informações de contato

## 🛠️ Stack Tecnológico

### Frontend
- **React** 19.2.0 - Biblioteca JavaScript para construção de interfaces
- **Vite** 7.2.4 - Build tool moderno e rápido
- **Bootstrap** 5.3.8 - Framework CSS para estilização responsiva
- **React Icons** 5.5.0 - Biblioteca de ícones para React

### Ferramentas de Desenvolvimento
- **ESLint** 9.39.1 - Linter para manter a qualidade do código
- **React Refresh** - Hot module replacement para desenvolvimento
- **Vite React Plugin** - Plugin oficial do React para Vite

## 📦 Instalação

### Pré-requisitos
- Node.js 18.0 ou superior
- npm ou yarn

### Passos

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/SystemNet.git
cd SystemNet
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🚀 Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento com hot reload
npm run dev

# Faz o build para produção (otimizado e minificado)
npm run build

# Visualiza a build de produção localmente
npm run preview

# Executa o linter para verificar a qualidade do código
npm run lint
```

## 📁 Estrutura do Projeto

```
SystemNet/
├── src/
│   ├── components/
│   │   ├── card/               # Componentes de cards
│   │   ├── depoimentos/        # Seção de depoimentos
│   │   ├── instituicional/     # Seção institucional
│   │   ├── navbar/             # Barra de navegação
│   │   ├── rodape/             # Rodapé da página
│   │   ├── section/            # Seções principais
│   │   ├── section2/           # Seções secundárias
│   │   └── servico/            # Seção de serviços
│   ├── assets/                 # Imagens e recursos estáticos
│   │   ├── logos/
│   │   ├── vector/
│   │   └── meme*.jpg           # Imagens de perfil dos depoimentos
│   ├── hooks/
│   │   └── useReveal.js        # Hook customizado para animações
│   ├── App.jsx                 # Componente raiz
│   ├── App.css                 # Estilização global
│   ├── main.jsx                # Ponto de entrada
│   └── index.css               # Estilos gerais
├── public/                     # Arquivos públicos estáticos
├── vite.config.js              # Configuração do Vite
├── eslint.config.js            # Configuração do ESLint
├── package.json                # Dependências e scripts
├── index.html                  # HTML principal
└── README.md                   # Este arquivo
```

## 🎨 Componentes Principais

### Navbar
Barra de navegação responsiva com links para diferentes seções da página.

### Seções
Componentes de apresentação que exibem informações sobre a empresa e seus serviços.

### Depoimentos
Exibe avaliações de clientes com imagens de perfil, nomes, cargos e estrelas de classificação.

### Cards
Componentes reutilizáveis para apresentar serviços ou produtos em um formato visual atrativo.

### Rodapé
Footer com informações de contato e links adicionais.

## 🎯 Hook Customizado

### `useReveal`
Hook criado para adicionar animações de reveal (aparecimento) nos elementos da página, melhorando a experiência visual da landing page.

## 👥 Colaboradores

- **Gabriel Moraes** - Desenvolvedor Principal
- **João Victor** - Colaborador


## 🚢 Deploy

Para fazer deploy da aplicação:

```bash
# Fazer build para produção
npm run build

# Os arquivos otimizados estarão em dist/
```

Os arquivos em `dist/` podem ser servidos por qualquer servidor web estático ou plataformas como:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- etc.

## 📝 Notas de Desenvolvimento

- O projeto utiliza **CSS puro** para estilização, sem dependências de CSS-in-JS
- Cada componente possui seu próprio arquivo CSS para melhor organização
- Bootstrap é utilizado para layout responsivo
- React Icons é usado para ícones vetoriais

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para SystemNet**