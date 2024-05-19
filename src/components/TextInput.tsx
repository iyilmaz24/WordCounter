import { useState } from "react";
import Warning from "./Warning";

type TextInputProps = {
  text: string;
  setText: (text: string) => void;
};

export default function TextInput({
  text,
  setText,
}: TextInputProps): JSX.Element {
  const [warningText, setWarningText] = useState("");

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.includes("<script>")) {
      setText(e.target.value.replace("<script>", ""));
      setWarningText("No script tags allowed!");
      return;
    } else if (e.target.value.includes("@")) {
      setText(e.target.value.replace("@", ""));
      setWarningText("Sorry, no @ allowed in input.");
      return;
    }
    setText(e.target.value);
    setWarningText("");
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleText}
        placeholder="Enter your text here..."
        spellCheck="false"
      >
        TextInput
      </textarea>
      {warningText !== "" && <Warning warningText={warningText} />}
    </div>
  );
}
