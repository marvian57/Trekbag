import Button from "./Button";
import { secondaryButtons } from "../constants";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => (
        <Button type="secondary" key={text}>
          {text}
        </Button>
      ))}
    </section>
  );
}
