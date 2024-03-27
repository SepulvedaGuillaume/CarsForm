import InputCheckbox from "./components/InputCheckbox";
import Input from "./components/Input";
import InputRadio from "./components/InputRadio";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
import { carsSelect, carsRadio, carsInput } from "./data";

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
        <div>
          {carsInput.map((value, index) => (
            <Input label={value.name} type={value.type} devise={value.devise} placeholder={value.placeholder} min={value.min} key={index} />
          ))}
          
        </div>
        

        <TextArea />
      </form>
    </>
  );
}
