export const KEYWORD_STOPMOTION_ID = 10121;
export const GENRE_ANIMATION_ID = 16;
export const LANGUAGE_PT_BR = 'pt-br'
export const DEFAULT_SORT_BY = 'popularity.desc'
export const DISCOVER_MOVIES_URL = '/3/discover/movie'
export const MOVIE_DETAILS_URL = '/3/movie'
export const MOVIE_SEARCH_URL = '/3/search/movie'

export const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/'

export const SORT_TYPES_MAP = {
    default: { label: 'Popularidade', value: 'popularity' },
    popularity: { label: 'Popularidade', value: 'popularity' },
    vote_average: { label: 'Média de votos', value: 'vote_average' },
    vote_count: { label: 'Nº de votos', value: 'vote_count' },
    title: { label: 'Título', value: 'title' },
    primary_release_date: { label: 'Data de lançamento', value: 'primary_release_date' }
}

export const MOCK_FILMES = [
    {
        id: 3933, // 3933
        title: 'A Noiva Cadáver',
        overview: "As famílias de Victor e Victoria estão arranjando seu casamento. Nervoso com a cerimônia, Victor vai sozinho à floresta para ensaiar seus votos. No entanto, o que ele pensava ser um tronco de árvore na verdade é o braço esquelético de Emily, uma noiva que foi assassinada depois de fugir com seu amor. Convencida que Victor acabara de lhe pedir a mão em casamento, Emily o leva para o mundo dos mortos, mas ele precisa retornar rapidamente antes que Victoria se case com o malvado Lorde Barkis.",
        release_date: "2005-09-12",
        director: 'Tim Burton',
        popularity: 173.657,
        imagens: {
            principal: {
                src: '/images/noiva-cadaver.jpg'
            }
        }
    },
    {
        id: 14836, // 14836
        title: 'Coraline e o Mundo Secreto',
        overview: "Entediada em sua nova casa, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Coraline se encanta com a descoberta, mas logo descobre que há algo de errado quando seus pais alternativos tentam mantê-la eternamente nesse mundo paralelo.",
        release_date: "2009-02-05",
        director: 'Henry Selick',
        popularity: 228.669,
        imagens: {
            principal: {
                src: '/images/coraline.jpg'
            }
        }
    },
    {
        id: 9479, // 9479
        title: 'O Estranho Mundo de Jack',
        overview: "Jack Skellington, o Rei das Abóboras, se cansa de fazer o Dia das Bruxas todos os anos e deixa os limites da cidade. Por acaso, acaba atravessando o portal do Natal, onde vê a alegria do espírito natalino. Ao retornar para a Cidade do Halloween, sem ter compreendido o que viu, ele começa a convencer os cidadãos a sequestrarem o Papai Noel e fazerem seu próprio Natal. Apesar de sua leal namorada Sally ser contra, o Papai Noel é capturado e os fatos mostrarão que Sally estava certa o tempo todo.",
        release_date: "1993-10-09",
        director: 'Tim Burton',
        popularity: 158.329,
        imagens: {
            principal: {
                src: '/images/mundo-jack.jpg'
            }
        }
    },
]


export const lightTheme = {
    colors: {
        bgColor: '#F1F1F1',
        textColor: '#2a2a2a',
        primary: '#B12F1F',
        primaryOp: '#b12f1f4d',
        secondary: '#5D3E9F',
        secondaryOp: '#5D3E9F4d',
        white: '#F1F1F1',
        whiteOp: '#F1F1F14d',
        black: '#2a2a2a',
        blackOp: '#2a2a2a4d',
        darkGray: '#5A5555',
        darkGrayOp: '#5A55554d',
        gray: '#EDEBEB',
        grayOp: '#EDEBEB4d',
    },
    font: {
        family: 'Poppins',
        lineHeight: 1.5,
        fontWeight: '400',
    },
};

export const darkTheme = {
    colors: {
        bgColor: '#2a2a2a',
        textColor: '#F1F1F1',
        primary: '#5D3E9F',
        primaryOp: '#5D3E9F4d',
        secondary: '#B12F1F',
        secondaryOp: '#b12f1f4d',
        white: '#F1F1F1',
        whiteOp: '#F1F1F14d',
        black: '#2a2a2a',
        blackOp: '#2a2a2a4d',
        darkGray: '#5A5555',
        darkGrayOp: '#5A55554d',
        gray: '#EDEBEB',
        grayOp: '#EDEBEB4d',
    },
    font: {
        family: 'Poppins',
        lineHeight: 1.5,
        fontWeight: '400',
    },
};