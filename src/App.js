import InputCheckbox from "./components/InputCheckbox";
import InputNumber from "./components/InputNumber";
import InputRadio from "./components/InputRadio";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
import InputText from "./components/InputText";
import { carsSelect, carsRadio } from "./data";

export default function App() {
  return (
    <>
      <h1>Cars form</h1>
      <form>
        <div>
          {carsSelect.map((value, index) => (
            <Select options={value.data} label={value.name} key={index} />
          ))}
        </div>
        <div>
          {carsRadio.map((value, index) => (
            <InputRadio options={value.data} label={value.name} key={index} />
          ))}
        </div>
        <InputCheckbox />
        <InputNumber />

        <TextArea />
        <InputText />
      </form>
    </>
  );
}
