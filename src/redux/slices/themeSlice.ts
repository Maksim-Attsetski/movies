import {createSlice} from "@reduxjs/toolkit";

interface IState {
    dark: boolean
}

const initialState: IState = {
    dark: !!localStorage.getItem('dark')
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setTheme: (state) => {
            const htmlEl = document.querySelector('html')
            if (htmlEl) {
                state.dark
                    ? htmlEl.dataset.mode = 'dark'
                    : htmlEl.dataset.mode = 'light'
            }
        },
        changeTheme: (state) => {
            const htmlEl = document.querySelector('html')
            if (htmlEl)

            if (state.dark) {
                state.dark = false
                localStorage.removeItem('dark')
                htmlEl.dataset.mode = 'light'
            } else {
                state.dark = true
                localStorage.setItem('dark', 'true')
                htmlEl.dataset.mode = 'dark'
            }
        }
    }
})

export const {changeTheme, setTheme} = themeSlice.actions
export default themeSlice.reducer