export type ThemeType = 'dark' | 'red' | 'green' | 'purple' | 'blue'
type initState = { theme: ThemeType };
const initState: initState = {theme: 'dark'};

export const themeReducer = (state = initState, action: changeThemeCType): initState => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: ThemeType) => ({
    type: 'CHANGE-THEME',
    theme
}) as const;

type changeThemeCType = ReturnType<typeof changeThemeC>