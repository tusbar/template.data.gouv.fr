import Container from './container'

export default () => (
  <footer>
    <Container>
      <div className='container'>
        <div>
          <img src='/static/images/etalab.png' />
          <ul className='social'>
            <li><a href='https://www.twitter.com/etalab'><img src='/static/images/icons/twitter.svg' alt='Twitter' /></a></li>
            <li><a href='https://www.github.com/etalab'><img src='/static/images/icons/github.svg' alt='Github' /></a></li>
            <li><a href='https://www.facebook.com/etalab'><img src='/static/images/icons/facebook.svg' alt='Facebook' /></a></li>
            <li><a href='mailto:info@data.gouv.fr'><img src='/static/images/icons/envelop.svg' alt='Contact' /></a></li>
          </ul>
        </div>
        <ul className='links'>
          <li><h2>template.data.gouv.fr</h2></li>
          <li>Données de référence</li>
          <li>Conditions générales d'utilisation</li>
          <li>API</li>
        </ul>
        <ul className='links'></ul>
      </div>
    </Container>

    <style jsx>{`
      footer {
        background: var(--theme-background-dark);
        color: var(--white);
        padding: 2em 0;
        line-height: 2em;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      .social {
        margin-top: 1em;
      }

      .social li {
        display: inline;
        margin-right: 1em;
      }

      .social img {
        width: 25px;
      }

      .links {
        margin: 0;
      }

      .social h2 {
        margin-top: 0;
        margin-bottom: 0.5em;
      }
    `}</style>
  </footer>
)
