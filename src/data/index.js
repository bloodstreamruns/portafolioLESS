import portafolioPage from './pages/portafolio.js';

const paginas = {
    '/index.html': portafolioPage
};

const getPageContext = (pagePath) => paginas[pagePath] ?? {};

export default getPageContext;