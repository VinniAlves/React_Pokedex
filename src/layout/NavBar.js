import {CgPokemon} from 'react-icons/cg'
import {TbSearch} from 'react-icons/tb'
import styles from './NavBar.module.css'
import { useState } from 'react'


function NavBar({inputPesq,clickpesq}){
    const[pesquisaInput,setPesquisaInput] = useState()
    const[onchangeInput,setOnchangeInput] = useState()

    function push(event){
        setOnchangeInput(event.target.value)
        
    }
    
    
    function clickpesq(){
        inputPesq(onchangeInput)
    }

    return(
        <div className={styles.container}> 
            <CgPokemon className={styles.icon_poke}/>
            <p className={styles.text}>Pokédex</p>
            
           

        </div>
    )
}

export default NavBar