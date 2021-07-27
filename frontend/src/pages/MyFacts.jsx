import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FactList } from "../cmps/FactList"
import { loadFavFacts, removeFact } from "../store/actions/factAction"

export const MyFacts = (props) => {

    const { myFacts } = useSelector(state => state.factModule)
    const dispatch = useDispatch()
    const isMyFacts = true

    useEffect(() => {
        dispatch(loadFavFacts())
    }, [])

    const removeFromMyFacts = (fact) => {
        dispatch(removeFact(fact.id))
    }

    return (
        <section className="my-facts container">
            <div className="my-facts-header flex align-center">
                <h3>My Facts</h3>
                <img className="dog-img" src={require(`../assets/img/dog1.jpg`).default} alt="" />
            </div>
            <FactList facts={myFacts} isMyFacts={isMyFacts} onRemoveFromMyFacts={removeFromMyFacts} />
        </section>
    )
}