type StatTrackerProps = {
  inputText: string;
};

export default function StatTracker({ inputText }: StatTrackerProps) {
  const numberOfCharacters = inputText.length;
  const numberOfWords = inputText
    .split(/\s/)
    .filter((word) => word !== "").length;

  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={numberOfCharacters} label="Instagram" maxWords={2200} />
      <Stat number={numberOfCharacters} label="X (Twitter)" maxWords={280} />
    </section>
  );
}

type StatProps = {
  number: number;
  label: string;
  maxWords?: number;
};

function Stat({ number, label, maxWords }: StatProps) {
  return (
    <section className="stat">
      {maxWords ? (
        <span
          className={`stat__number ${
            number > maxWords ? "stat__number--limit" : ""
          }`}
        >
          {number} / {maxWords}
        </span>
      ) : (
        <span className="stat__number">{number}</span>
      )}
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
