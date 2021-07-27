import { FactPreview } from "./FactPreview"
import { ToggleBtnPopup } from "./ToggleBtnPopup"

export const FactList = ({ facts, listProps }) => {

    return (
        <section className="fact-list">
            {facts.map((fact, idx) => {
                return <FactPreview key={idx} fact={fact} isMyFacts={listProps.isMyFacts}>
                    <ToggleBtnPopup listProps={listProps} fact={fact} /> 
                </FactPreview>
            })}
        </section>
    )
}
