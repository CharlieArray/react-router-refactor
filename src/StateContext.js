import React from 'react'

const StateContext = React.createContext({
    toggleState: () => {}
})

export default StateContext

//can add piggy back updater functions here for buttons aka setLang: () => {  }
