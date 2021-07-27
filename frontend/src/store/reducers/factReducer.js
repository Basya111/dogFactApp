const initialState = {
    myFacts: [],
    facts: []
  }
  
  export function factReducer(state = initialState, action = {}) {
    switch (action.type) {
      case 'SET_FACT':
        return { ...state, facts: action.facts }
      case 'SET_FAV_FACT':
        return { ...state, myFacts: action.myFacts }
      case 'ADD_FACT':
        return { ...state, myFacts: [...state.myFacts, action.fact] }
      case 'REMOVE_FACT':
        return { ...state, myFacts: state.myFacts.filter(fact => fact.id !== action.factId) }
      default:
        return state
    }
  }