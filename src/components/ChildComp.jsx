import { useContext } from "react";
import { UserContext } from "../App";

function ChildComp() {
  // 3. use useContext
  const user = useContext(UserContext)
  return ( 
    // 4. Now you can display context value
    <>
      Display Context value : {user}
    </>
   );
}

export default ChildComp
