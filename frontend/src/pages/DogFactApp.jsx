import React, { useEffect } from 'react'
import { FactList } from '../cmps/FactList'
import { Loader } from '../cmps/Loader'
import { loadFacts, saveFact } from '../store/actions/factAction'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { FactAmount } from '../cmps/FactAmount'


export const DogFactApp = () => {

    const { facts} = useSelector(state => state.factModule)
    const dispatch = useDispatch()
    const [factsAmount, setAmount] = useState(30)

    useEffect(() => {
        dispatch(loadFacts(factsAmount))
    }, [])

    const addToMyFacts = (factToAdd) => {
        dispatch(saveFact(factToAdd))
    }

    const onSetAmout = (amount) => {
        dispatch(loadFacts(amount))
        setAmount(factsAmount)
    }

    const listProps = {
        btnContent: 'save',
        msg: 'Added to My Facts!',
        onToggleFact: addToMyFacts,
        isMyFacts: false
    }


    if (!facts.length) return <Loader />
    return (
        <section className="fact-app container">
            <div className="facts-header flex align-end justify-center">
                <img className="dog-img" src={require(`../assets/img/dog2.jpg`).default} alt="" />
                <div>
                    <h3>Dog Facts</h3>
                    <FactAmount onSetAmout={onSetAmout} />
                </div>
            </div>
            <FactList facts={facts} onAddToMyFacts={addToMyFacts} listProps={listProps}/>
        </section>
    )
}