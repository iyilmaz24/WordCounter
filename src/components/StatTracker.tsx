export default function StatTracker() {
  return (
    <section className="stats">
      <Stat number={0} label="Words" />
      <Stat number={0} label="Characters" />
      <Stat number={0} label="X / Twitter" />
      <Stat number={0} label="Instagram" />
    </section>
  );
}

type StatProps = {
  number: number;
  label: string;
};

function Stat({ number, label }: StatProps) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
