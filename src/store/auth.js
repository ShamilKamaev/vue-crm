import firebase from 'firebase/app'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch(error) {
        throw error
      }
    }
  },
  getters: {
  }
}