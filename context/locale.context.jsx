import React, { createContext, PureComponent } from "react";

export const LocaleContext = createContext();

LocaleContext.displayName = "localeContext";

export class LocaleProvider extends PureComponent {
  state = {
    locale: "en",
  };

  changeLocale = () => {
    this.setState(({ locale }) => {
      return {
        locale: locale === "en" ? "fr" : "en",
      };
    });
  };

  render() {
    return (
      <LocaleContext.Provider
        value={{
          locale: this.state.locale,
          changeLocale: this.changeLocale
        }}
      >
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}
