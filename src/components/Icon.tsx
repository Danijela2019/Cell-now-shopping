import React from 'react';
import {IconContext} from "react-icons"


type IconProps = {
    children: React.ReactElement
    size: string
    color:string
}
const Icon = (props: IconProps) => {
    return (
          <IconContext.Provider value={{ style:{
              fontSize: `${props.size}`,
               color:`${props.color}`
               }}}>
              <div>
                  { props.children }
              </div>
          </IconContext.Provider>
     )
  }

export default Icon;