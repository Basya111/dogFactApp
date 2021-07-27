import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export const Home = (props) => {
    const history = useHistory()

    const goToFacts = () => {
        history.push('/dog-fact')

    }

    return (
        <section className="home container">
            <div>
                <h1>Welcome!</h1>
                <p>Here you can find al the facts about dogs.
                    For example, did you know that dog’s don’t see in black-and-white,
                    they have 2 color receptors, and can see yellow and blue.? Well now you know! </p>
                <Button onClick={goToFacts} size="medium" variant="contained" color='primary'>Get strated</Button>
            </div>
            <img src={require(`../assets/img/dog3.jpg`).default} alt="" />
        </section>
    )
}