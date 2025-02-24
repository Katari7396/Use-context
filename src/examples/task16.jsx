import { useContext } from "react";
import { UserContext } from "./task12";

function Component5() {

    const user = useContext(UserContext)

  return (
    <div>
      <h1>{`HELLO ${user} AGAIN`} 😊</h1>
    </div>
  )
}

export default Component5;
