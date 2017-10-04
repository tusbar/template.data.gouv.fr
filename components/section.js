import Container from './container'

export default ({title, subtitle, children, theme = 'white'}) => (
  <section className={`section-${theme}`}>
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
        background-color: var(--theme-background-white);
        color: var(--black);
      }

      .section-grey {
        background-color: var(--theme-background-grey);
        color: var(--black);
      }

      .section-dark {
        background-color: var(--theme-background-dark);
        color: #fff;
      }

      .section-color {
        background-color: var(--theme-background-color);
        color: #fff;
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
