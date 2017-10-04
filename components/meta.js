import Head from 'next/head'

import Theme from './styles/theme'
import Fonts from './styles/fonts'

export default () => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <title>Tagline libérer les données sans effort et sur data.gouv.fr - template.data.gouv.fr</title>

      {/* Search Engine */}
      <meta name='description' content='Tagline libérer les données sans effort et sur data.gouv.fr' />
      <meta name='image' content='https://etalab.github.io/template.data.gouv.fr/images/preview.png' />
      {/* Schema.org for Google */}
      <meta itemProp='name' content='Titre chili con carne' />
      <meta itemProp='description' content='Tagline libérer les données sans effort et sur data.gouv.fr' />
      <meta itemProp='image' content='https://etalab.github.io/template.data.gouv.fr/images/preview.png' />
      {/* Twitter */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content='Titre chili con carne' />
      <meta name='twitter:description' content='Tagline libérer les données sans effort et sur data.gouv.fr' />
      <meta name='twitter:site' content='@geodatagouv' />
      <meta name='twitter:creator' content='geodatagouv' />
      <meta name='twitter:image:src' content='https://etalab.github.io/template.data.gouv.fr/images/preview.png' />
      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta name='og:title' content='Titre chili con carne' />
      <meta name='og:description' content='Tagline libérer les données sans effort et sur data.gouv.fr' />
      <meta name='og:image' content='https://etalab.github.io/template.data.gouv.fr/images/preview_fb.png' />
      <meta name='og:url' content='https://etalab.github.io/template.data.gouv.fr/' />
      <meta name='og:site_name' content='Titre chili con carne' />
      <meta name='og:locale' content='fr_FR' />
      <meta name='og:type' content='website' />
    </Head>

    <Theme />
    <Fonts />

    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      body {
        padding: 0;
        margin: 0;
        position: relative;
        overflow: auto;
        font-family: "Source Sans Pro", Arial, sans-serif;
        font-size: 15px;
        background: var(--theme-background-grey);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Evolventa", "Trebuchet MS", sans-serif;
      }

      a,
      button {
        outline: none;
      }

      a,
      a:hover,
      a:focus,
      a:visited,
      a:active {
        color: var(--theme-primary);
        text-decoration: none;
      }
    `}</style>
  </div>
)
