const INSTAGRAM_MAX_WORDS = 2200;
const X_MAX_WORDS = 280;

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
      <Stat
        number={numberOfCharacters}
        label="Instagram"
        maxWords={INSTAGRAM_MAX_WORDS}
      />
      <Stat
        number={numberOfCharacters}
        label="X (Twitter)"
        maxWords={X_MAX_WORDS}
      />
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
