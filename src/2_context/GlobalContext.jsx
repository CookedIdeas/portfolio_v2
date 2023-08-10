import React, { useContext } from 'react';

const defaultState = {
  dark: false,
  lang_fr: true,
  isNavHeaderOpen: false,
  toggleDark: () => {},
  toggleLang: () => {},
  toggleNavHeader: () => {},
  closeNavHeader: () => {},
};

const GlobalContext = React.createContext(defaultState);

// Getting dark mode information from OS!
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

class GlobalProvider extends React.Component {
  state = {
    dark: false,
    lang_fr: true,
    isNavHeaderOpen: false,
  };

  toggleDark = () => {
    let dark = !this.state.dark;
    localStorage.setItem('squareG_dark', JSON.stringify(dark));
    this.setState({ dark });
  };

  toggleLang = (choosedLang) => {
    let lang_fr;
    if (choosedLang === 'fr') {
      lang_fr = true;
    } else {
      lang_fr = false;
    }

    localStorage.setItem('squareG_lang', JSON.stringify(lang_fr));
    this.setState({ lang_fr });
  };

  toggleNavHeader = () => {
    let isNavHeaderOpen = !this.state.isNavHeaderOpen;
    this.setState({ isNavHeaderOpen });
  };

  closeNavHeader = (isTimeOut) => {
    let isNavHeaderOpen = this.state.isNavHeaderOpen;
    if (isNavHeaderOpen) {
      isNavHeaderOpen = !this.state.isNavHeaderOpen;
      // optional settimeout for click on anchorLinks in NavHeader
      if (isTimeOut) {
        setTimeout(() => {
          this.setState({ isNavHeaderOpen });
        }, isTimeOut);
      } else {
        this.setState({ isNavHeaderOpen });
      }
    }
  };

  //on mount, check if user already has preferences for theme and lang
  componentDidMount() {
    // Getting theme and lang values from localStorage
    const lsDark = JSON.parse(localStorage.getItem('squareG_dark'));
    const isLangFr = JSON.parse(localStorage.getItem('squareG_lang'));
    if (lsDark) {
      this.setState({ dark: lsDark });
    } else if (supportsDarkMode()) {
      this.setState({ dark: true });
    }
    this.setState({ lang_fr: isLangFr });
  }

  render() {
    const { children } = this.props;
    const { dark } = this.state;
    let { lang_fr } = this.state;
    let { isNavHeaderOpen } = this.state;
    return (
      <GlobalContext.Provider
        value={{
          dark,
          lang_fr,
          isNavHeaderOpen,
          toggleDark: this.toggleDark,
          toggleLang: this.toggleLang,
          toggleNavHeader: this.toggleNavHeader,
          closeNavHeader: this.closeNavHeader,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalContext;

export { GlobalProvider };

// ============ TO TEST ============ //
// export const GlobalContext = React.createContext({
//   theme: 'light',
//   toggleTheme: () => {},
// });

// export const GlobalProvider = ({ children }) => {
//   const [theme, setTheme] = React.useState('light');

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <GlobalContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };
