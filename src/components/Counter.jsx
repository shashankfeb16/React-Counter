import React from "react";
import "../styles/test.css"
import styles from '../styles/app.module.css'

const Counter = ({startingvalue})=>{
    const [count,setCount] = React.useState(startingvalue)
    return(
        <>
            <h1 className={count%2==0 ? styles.green : styles.red}>Counter:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={()=>{
                if(count>0){
                    setCount(count-1)
                }
            }}>Decrease</button>
            <button onClick={()=>setCount(count*2)}>Double</button>
        </>
    )
}

export default Counter