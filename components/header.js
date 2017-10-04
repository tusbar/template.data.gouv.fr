import Link from 'next/link'

export default ({fixed = false}) => (
  <nav className={fixed ? 'fixed' : null}>
    <div className='container'>
      <Link href='/'>
        <a>
          <img className='logo' src='/static/images/logo_site.svg' alt='Accueil de template.data.gouv.fr' />
        </a>
      </Link>

      <ul className='links'>
        <li><a href='#'>Données</a></li>
        <li><a href='#'>API</a></li>
        <li><a href='#'>Outils</a></li>
        <li><a href='#'>FAQ</a></li>
      </ul>
    </div>

    <style jsx>{`
      nav {
        box-shadow: 0 1px 4px var(--theme-box-shadow);
        width: 100%;
        background: #fff;
        z-index: 100;
      }

      .fixed {
        position: fixed;
        top: 0;
      }

      .container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
      }

      .logo {
        height: 70px;
        padding: 1em;
      }

      .links {
        display: inline;
        margin: 0;
        padding: 1em;
        list-style-type: none;
        text-align: right;
      }

      .links li + li {
        padding-left: 15px;
      }

      .links li {
        padding: 0;
        display: inline;
      }

      .links a {
        color: var(--black)
      }

      @media (max-width: 550px) {
        .links {
          padding-top: 0;
        }
      }

    `}</style>
  </nav>
)
