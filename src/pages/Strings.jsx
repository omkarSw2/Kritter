import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Check, Copy } from "lucide-react";

function Strings() {
  const [input, setInput] = useState("");
  const [normalizedString, setNormalizedString] = useState("");
  const [copied, setCopied] = useState(false);
  const [inputTouch, setinputTouch] = useState(false);

  function normalizeString(inputString) {
    inputString = inputString.trim();

    inputString = inputString.replace(/[^a-zA-Z0-9\s]/g, "");

    inputString = inputString.replace(/\s+/g, " ");

    const words = inputString.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(" ");
  }

  const handleCopy = () => {
    navigator.clipboard
      .writeText(normalizedString)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the "Copied!" message after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const handleNormalize = () => {
    const normalized = normalizeString(input);
    setNormalizedString(normalized);
    setinputTouch(true);
  };
  return (
    <div>
      <div className="flex  flex-row justify-center items-center ">
        <div>
          <h2 className="text-2xl mb-5">Please Enter the input to convert</h2>
          <div>
            <Textarea
              className="max-w-2xl"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setinputTouch(false);
              }}
              placeholder="Enter your string here"
              rows="4"
              cols="50"
            />
          </div>
        </div>
        <div className="ml-3">
          <Button onClick={handleNormalize}>Normalize String</Button>
        </div>
      </div>
      <div className="flex mt-10 flex-row justify-center items-center ">
        {inputTouch && (
          <div>
            <h2 className="text-2xl font-mono">Normalized String</h2>
            <p className="bg-secondary text-xl font-semibold p-4 rounded">
              {normalizedString}
            </p>
          </div>
        )}

        {inputTouch && (
          <Button className="ml-2" variant="secondary" onClick={handleCopy}>
            {!copied ? <Copy /> : <Check />}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Strings;
