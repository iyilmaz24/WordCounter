import { useState } from "react";
import StatTracker from "./StatTracker";
import TextInput from "./TextInput";

export default function Container() {
  const [text, setText] = useState("");

  return (
    <main className="container">
      <TextInput text={text} setText={setText} />
      <StatTracker inputText={text} />
    </main>
  );
}
