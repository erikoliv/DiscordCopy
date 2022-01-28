//pagina e fução 
//para aplicar configurações GLOBAIS 
//em todas as PAGINAS

function GlobalStyle() {
    return (
        <style global jsx> {`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
            }

            body {
                font-family: 'Open Sans', Sans-Serif;
            }

            /* App fit for Height*/
            html, body, #__next {
                min-height: 100vh;
                display: flex;
                flex: 1;
            }

            #__next {
                flex: 1;
            }

            #__next > * {
                flex: 1;
            }

            /* ./App fir Height */
        `}</style>
    );
}

export default function CustomApp({ Component, pageProps }) {
    console.log("Roda em todas as páginas");
    return (
        <>  
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}