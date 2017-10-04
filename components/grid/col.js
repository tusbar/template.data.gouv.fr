export default ({children}) => (
  <div>
    {children}

    <style jsx>{`
      div {
        margin: 0 2em;
        max-width: 20em;
      }

      @media (max-width: 550px) {
        div:not(:last-child) {
          margin-bottom: 1em;
        }
      }
    `}</style>
  </div>
)
