export default function UserInput({ userInput, onChange }) {
  return (
    <section>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="initialInvestment">Initial Investmentt</label>
            <input type="number" value={userInput.initialInvestment} id="initialInvestment" onChange={(e) => onChange(e.target.id, e.target.value)} required />
          </p>
          <p>
            <label htmlFor="annualInvestment">Annual Investment</label>
            <input type="number" value={userInput.annualInvestment} id="annualInvestment" onChange={(e) => onChange(e.target.id, e.target.value)} required />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expectedReturn">Expected Return</label>
            <input type="number" value={userInput.expectedReturn} id="expectedReturn" onChange={(e) => onChange(e.target.id, e.target.value)} required />
          </p>
          <p>
            <label htmlFor="duration">Duration</label>
            <input type="number" value={userInput.duration} id="duration" onChange={(e) => onChange(e.target.id, e.target.value)} required />
          </p>
        </div>
      </div>
    </section>
  );
}
