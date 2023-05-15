import styles from './BackgroundPokemon.module.css'
import {BrowserRouter as Router , Route, Routes, Link} from "react-router-dom"
import MenuPokemon from './options/MenuPokemon'
import InfoPokemon from './options/InfoPokemon'
import { useEffect, useState } from "react"
import Preview from './Preview'

function BackgroundPokemon({img,input,click}){



    
  
    return(
        
    <div className={styles.background_container}>
        <div className={styles.background}>   
                <MenuPokemon pesquisarProps={input} clickNav={click}/>        
        </div>
    </div>
       
         
        
    )
}

export default BackgroundPokemon