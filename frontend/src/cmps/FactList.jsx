import { FactPreview } from "./FactPreview"
import { ToggleBtnPopup } from "./ToggleBtnPopup"

export const FactList = ({ facts, onAddToMyFacts, onRemoveFromMyFacts, isMyFacts }) => {


    return (
        <section className="fact-list">
            {facts.map((fact, idx) => {
                return <FactPreview key={idx} fact={fact} isMyFacts={isMyFacts}>
                    {!isMyFacts && <ToggleBtnPopup onToggleFact={onAddToMyFacts} btnContent={'save'} 
                    fact={fact} msg={'Added to My Facts!'} />}
                    {isMyFacts && <ToggleBtnPopup onToggleFact={onRemoveFromMyFacts} 
                    fact={fact} btnContent={'remove'} msg={'Fact removed successfully!'} />}
                </FactPreview>
            })}
        </section>
    )
}