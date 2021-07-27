import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FactList } from "../cmps/FactList"
import { loadFavFacts, removeFact } from "../store/actions/factAction"

export const MyFacts = (props) => {

    const { myFacts } = useSelector(state => state.factModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadFavFacts())
    }, [])

    const removeFromMyFacts = (fact) => {
        dispatch(removeFact(fact.id))
    }

    const listProps = {
        btnContent: 'remove',
        msg: 'Fact removed successfully!',
        onToggleFact: removeFromMyFacts,
        isMyFacts: true
    }

    return (
        <section className="my-facts container">
            <div className="my-facts-header flex align-center">
                <h3>My Facts</h3>
                <img className="dog-img" src={require(`../assets/img/dog1.jpg`).default} alt="" />
            </div>
            {myFacts.length? 
            <FactList facts={myFacts} onRemoveFromMyFacts={removeFromMyFacts} listProps={listProps}/> : 
            <p>You didn't save any facts</p>}
        </section>
    )
}