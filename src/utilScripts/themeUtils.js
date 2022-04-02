const getTheme = (theme) => {
  const currentTheme = theme.currentTheme;
  switch (currentTheme) {
    case "dark":
      return "dark-theme";
    case "light":
      return "light-theme";
    default:
      return "light-theme";
  }
};

export { getTheme };
