export default () => (
  <style jsx global>{`
    :root {
      --blue: #49a5d6;
      --dark-blue: #3882a9;
      --white: #fff;
      --almost-black: #404040;
      --black: #1c1c1c;
      --light-grey: #e7e7e7;
      --grey: #dadada;
      --dark-grey: #cdcdcd;
      --theme-primary: var(--blue);
      --theme-primary-darker: var(--blue);
      --theme-secondary: var(--blue);
      --theme-secondary-darken: var(--dark-blue);
      --theme-border: var(--dark-grey);
      --theme-border-lighter: var(--grey);
      --theme-background-white: var(--white);
      --theme-background-grey: var(--light-grey);
      --theme-background-color: var(--blue);
      --theme-background-dark: var(--black);
      --theme-box-shadow: var(--grey);
      --theme-dark-text: var(--almost-black);
    }
  `}</style>
)
