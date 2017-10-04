import theme from '../styles/theme'

export default ({type = 'submit', name, children}) => (
  <button type={type} name={name}>
    {children}

    <style jsx>{`
      button,
      button:focus,
      button:active,
      button:visited {
        display: inline-block;
        margin: 0 auto;
        padding: 0.85em 3em;
        color: #fff;
        background-color: ${theme.secondary};
        border-bottom: 1px solid ${theme.border};
        border-radius: 2px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
        border: 1px solid transparent;
        font-family: "Evolventa", "Trebuchet MS", sans-serif;
        font-size: 1.2em;
        position: relative;
        overflow: hidden;
        transition: box-shadow 0.25s;
      }

      button:hover {
        text-decoration: none;
        box-shadow: inset 0 0 0 2em ${theme.secondaryDarken};
      }

      .button:active {
        transform: translateY(1px);
        border-bottom: 0;
      }
    `}</style>
  </button>
)
