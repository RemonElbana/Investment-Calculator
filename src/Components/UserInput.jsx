export default function UserInput({onChange, userInput}) {
return (
    <section id="user-input">
    <div className="input-group">
        <article>
            <label htmlFor="II">Initial Investment</label>
            <input
                type="number"
                id="II"
                value={userInput.initialInvestment}
                required
                onChange={(event) =>
                onChange("initialInvestment", event.target.value)
                }
            />
        </article>
        <article>
            <label htmlFor="AI">Annual Investment</label>
            <input
                type="number"
                id="AI"
                value={userInput.annualInvestment}
                required
                onChange={(event) =>
                onChange("annualInvestment", event.target.value)
                }
            />
        </article>
    </div>
    <div className="input-group bottom ">
        <article>
            <label htmlFor="EX">Expected Return </label>
            <input
                type="number"
                id="EX"
                value={userInput.expectedReturn}
                required
                onChange={(event) => onChange("expectedReturn", event.target.value)}
            />
        </article>
        <article>
            <label htmlFor="DU">Duration</label>
            <input
                type="number"
                id="DU"
                value={userInput.duration}
                required
                onChange={(event) => onChange("duration", event.target.value)}
            />
        </article>
    </div>
    </section>
);
}
