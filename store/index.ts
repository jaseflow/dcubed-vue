export const state = () => ({
  projects: []
})

export const mutations = {
  setProjects(state, projects) {
    state.projects = projects
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const projects = await app.$axios.$get(
      "./projects.json"
    )
    commit("setProjects", projects.slice(0, 10))
  }
}
