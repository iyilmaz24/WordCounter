import StatTracker from "./StatTracker";
import TextInput from "./TextInput";

export default function Container() {
  return (
    <main className="container">
      <TextInput />
      <StatTracker />
    </main>
  );
}
