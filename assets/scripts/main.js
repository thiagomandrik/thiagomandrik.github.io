const themes = {
    dark: {
        corCabecalhoRodape: '#1A1A1A',
        corTextos: '#c5c0c0',
        corTextoCabecalhoRodape: '#c5c0c0',
        corDetalhesBotoes: '#481935',
        corBotaoHover: '#341327',
        corScrollTrack:'#31312B',
        corBg1: '#272727',
        corBg2: '#333',
        corPlaceholderCirculoExterno:'#333',
        corPlaceholderCirculoInterno:'#481935',
        corPlaceholderTexto:'#c5c0c0',
    },
    ligth: {
        corCabecalhoRodape: '#201b1b',
        corTextos: '#210c19',
        corTextoCabecalhoRodape: '#ddd6d6',
        corDetalhesBotoes: '#845a6f',
        corBotaoHover: '#634353',
        corScrollTrack: '#92828a',
        corBg1: '#ddd6d6',
        corBg2: '#f0ecec',
        corPlaceholderCirculoExterno: '#481935',
        corPlaceholderCirculoInterno: '#845a6f',
        corPlaceholderTexto: '#c8b7b7',
    }
};

const coresCSS = document.querySelector('html');

function setTheme(newTheme){
    const themeColors = themes[newTheme];
    Object.keys(themeColors).map(function(key) {
        coresCSS.style.setProperty(`--${key}`, themeColors[key]);
      });
}

const darkModeToggle = document.querySelector('.botaoThemeSelect');
darkModeToggle.addEventListener('change', function({target}){
    setTheme(target.checked ? 'dark' : 'ligth');
});