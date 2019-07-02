export const state = () => ({
  dark: false
})

export const mutations = {
  toggleDark(state) {
    state.dark = !state.dark
  }
}
