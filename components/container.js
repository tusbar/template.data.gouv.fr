export default ({children}) => (
  <div>
    {children}

    <style jsx>{`
      div {
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      @media (min-width: 400px) {
        div {
          width: 85%;
          padding: 0;
        }
      }

      @media (min-width: 550px) {
        div {
          width: 80%;
        }
      }
    `}</style>
  </div>
)
