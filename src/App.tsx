import React from "react";
import Button from "./component/Button";
import { Airplane } from "iconsax-react";

const App: React.FC = () => {
  return (
    <>
      <Button label="Hello world" />
      <Button.Icon
        icon={<Airplane size={32} color="#333" />}
        label="Hello world"
      />
    </>
  );
};

export default App;
