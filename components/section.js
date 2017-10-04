import theme from '../styles/theme'
import Container from './container'

export default ({title, subtitle, children, background = 'white'}) => (
  <section className={`section-${background}`}>
    <Container>
      {title && <h2 className='title'>{title}</h2>}
      {subtitle && <p className='subtitle'>{subtitle}</p>}

      {children}
    </Container>

    <style jsx>{`
      section {
        padding: 6em 0;
      }

      .section-white {
        background-color: ${theme.backgroundWhite};
        color: ${theme.colors.black};
      }

      .section-grey {
        background-color: ${theme.backgroundGrey};
        color: ${theme.colors.black};
      }

      .section-dark {
        background-color: ${theme.backgroundDark};
        color: ${theme.colors.white};
      }

      .section-color {
        background-color: ${theme.backgroundColor};
        color: ${theme.colors.white};
      }

      .subtitle {
        margin: 0 auto 2em;
        max-width: 640px;
        font-size: 1.3em;
        font-style: italic;
        text-align: center;
        margin-bottom: 0;
      }

      .subtitle:not(:last-child) {
        margin-bottom: 3em;
      }

      .title + .subtitle {
        margin-top: -3em;
      }

      .title {
        margin: 0 0 3em;
        text-align: center;
      }
    `}</style>
  </section>
)
