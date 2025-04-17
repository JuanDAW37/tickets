import './Message.css';

export const Message = ({status, statusText}) => {
    return(
        <main>
            <article>
                <h3>Error: {status}, Motivo:{statusText}</h3>
            </article>
        </main>
    )
}