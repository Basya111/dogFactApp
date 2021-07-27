
export const FactPreview = ({fact, children, isMyFacts}) => {

    return(
        <article className="fact-preview">
            <p>{(isMyFacts)? fact.txt : fact }</p>
            {children}
        </article>
    )
}