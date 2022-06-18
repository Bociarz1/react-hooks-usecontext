import React from 'react'
import ParentComp from './components/ParentComp'

// 1. Create Context
export const UserContext = React.createContext()

function App() {
  return (
    // 2. Wrap componetns with Provider
    <>
      <UserContext.Provider value={"this is how i am learning about useContext hook"} >
      <ParentComp />
      </UserContext.Provider>
    </>
  );
}

export default App;
