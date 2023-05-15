import { useEffect, useState } from 'react'
import styles from './BackgroundContainer.module.css'
import BackgroundPokemon from './BackgroundPokemon'
import NavBar from './NavBar'


function BackgroundContainer({pesquisaInput}){
const [valueInput, setValueInput] = useState('')
const [clickInput, setClickInput] = useState('')

function funcpush(value){
   
   setValueInput(value)
}
    return(
        
            <div className={styles.background}>
            
                <NavBar inputPesq={funcpush} clickpesq={setClickInput}/>
                <BackgroundPokemon input={valueInput} click={clickInput}/>
            </div>
        
        
       

    )
}

export default BackgroundContainer