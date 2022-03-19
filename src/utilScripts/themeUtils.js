const getTheme = () => {
    const localTheme = localStorage.getItem("localTheme");
    switch(localTheme) {
        case "darkTheme":
            return "dark-theme"
        case "lightTheme":
            return "light-theme"
        default:
            return "light-theme"
    }
}

export { getTheme }
