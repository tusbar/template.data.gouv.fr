import theme from '../styles/theme'
import Container from './container'

export default ({title, tagline}) => (
  <div>
    <h1 className='white'>Titre chili con carne</h1>
    <p className='white'>Tagline libérer les données sans effort et sur data.gouv.fr</p>

    <style jsx>{`
      div {
        height: 38vh;
        min-height: 18em;
        width: 100%;
        color: #fff;
        background-color: ${theme.backgroundGrey};
        background-blend-mode: darken;
        background-image: url(/static/images/background.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${theme.darkText};
      }

      .white {
        padding: 10px 1em;
        background-color: white;
      }

      h1 {
        margin: 0 0 0.5em;
      }

      p {
        margin: 0;
        font-size: 1.2em;
        font-style: italic;
      }
    `}</style>
  </div>
)
