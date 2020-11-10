import produce from 'immer'

const INITIAL_STATE = {
  page: 'meu_perfil',
}

export default function dashboard(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@dashboard/SELECTED_PAGE': {
        draft.page = action.payload.data
        break
      }
      default:
        return state
    }
  })
}
