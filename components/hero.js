export default ({title, tagline}) => (
  <div className='hero'>
    <div className='container'>
      <h1 className='white'>Titre chili con carne</h1>
      <p className='white'>Tagline libérer les données sans effort et sur data.gouv.fr</p>
    </div>

    <style jsx>{`
      .hero {
        height: 38vh;
        min-height: 18em;
        width: 100%;
        color: #fff;
        background-color: var(--theme-background-grey);
        background-blend-mode: darken;
        background-image: url(/static/images/background.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        box-sizing: border-box;
      }

      .white {
        padding: 10px 1em;
        background-color: white;
      }

      h1 {
        margin: 0 0 0.5em;
        color: var(--theme-dark-text);
      }

      p {
        margin: 0;
        color: var(--theme-dark-text);
        font-size: 1.2em;
        font-style: italic;
      }
    `}</style>
  </div>
)
