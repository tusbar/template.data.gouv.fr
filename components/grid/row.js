export default ({children}) => (
  <div>
    {children}

    <style jsx>{`
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-left: -2em;
        margin-right: -2em;
      }

      @media (max-width: 550px) {
        div {
          flex-direction: column;
        }

        div * + * {
          margin-top: 1em;
        }
      }
    `}</style>
  </div>
)
