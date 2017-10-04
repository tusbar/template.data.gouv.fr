import Button from './button'

export default () => (
  <div className='container'>
    <form action='' method='post' name='form' target='_blank' noValidate>
      <div className='group'>
        <label htmlFor='email'>Pour être informé des nouveautés, inscrivez-vous à notre newsletter :</label>
        <input type='email' value='' name='email' id='email' />
      </div>

      <Button name='subscribe'>Valider</Button>
    </form>

    <style jsx>{`
      .container {
        max-width: 30em;
        margin: auto;
      }

      .group {
        display: block;
        margin-bottom: 1em;
      }

      label {
        display: block;
        margin-bottom: 0.5em;
      }

      input {
        width: 100%;
        border: none;
        outline: none;
        padding: 16px 20px;
        font: inherit;
        line-height: 1.6;
        color: var(--black);
        border-radius: 2px;
        box-sizing: border-box;
      }
    `}</style>
  </div>
)
