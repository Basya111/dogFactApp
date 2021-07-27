import { factService } from '../../services/factService'

export function loadFacts(num) {
  return async dispatch => {
    try {
      const facts = await factService.query(num)
      dispatch({ type: 'SET_FACT', facts })

    } catch (err) {
      console.log('FactActions: err in loadFacts', err)
    }
  }
}

export function loadFavFacts() {
  return async dispatch => {
    try {
      const myFacts = await factService.queryFav()
      dispatch({ type: 'SET_FAV_FACT', myFacts })

    } catch (err) {
      console.log('FactActions: err in loadFacts', err)
    }
  }
}

export function saveFact(fact) {
  return async dispatch => {
    try {
      const savedFact = await factService.save(fact)
      dispatch({ type: (fact?._id)? 'UPDATE_FACT' : 'ADD_FACT', fact: savedFact })
      
    } catch (err) {
      console.log('FactActions: err in saveFact', err)
    }
  }
}


export function removeFact(factId) {
  return async dispatch => {
    try {
      await factService.remove(factId)
      dispatch({ type: 'REMOVE_FACT', factId })
    } catch (err) {
      console.log('FactActions: err in removeFact', err)
    }
  }
}
