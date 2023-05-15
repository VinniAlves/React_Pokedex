import { useEffect, useState } from 'react'
import BackgroundPokemon from '../BackgroundPokemon'
import styles from './InfoPokemon.module.css'
import LinkButtom from './infocontainer/LinkButtom'
import{TbWeight} from 'react-icons/tb'
import {VscSymbolRuler} from 'react-icons/vsc'
import { useLocation } from 'react-router-dom'


function InfoPokemon({namePokemon,peso,tamanho,habilidadeUm,habilidadeDois,
hp,atk,def,satk,sdef,spd
}){

    const {state} = useLocation()
   const [duashab , setDuashab] = useState(false)

   const[recebercolortipoum, setrecebercolortipoum] = useState(state.tipoum)
   const[recebercolortipodois, setrecebercolortipoumdois] = useState(state.tipodois)
   const [styleBackground , setStylesBackground] = useState(recebercolortipoum+"_background")

  useEffect(()=>{
    if(state.tipodois){
        setDuashab(true)
        return
    }

  })




//styles.background
    return (
            <div className={`${styles[styleBackground]}`}>
                <LinkButtom/>
                <h1 className={styles.name}>{state.nomep}  </h1>
                <div className={styles.background_info}>
                <img className={styles.img} width='100%' src={state.imagemp} 
                    alt="poke"/>
                    <div className={styles.container_tipo}>
                        <div className={`${styles[recebercolortipoum]}`}>
                            <p className={styles.tipo_text}>  
                                {state.tipoum}
                            </p>
                            </div>

                            
                        {duashab &&(
                            <div className={`${styles[recebercolortipodois]}`}>
                            <p className={styles.tipo_text}>  
                                {state.tipodois}
                            </p>
                            </div>
                        )}   
                    </div>
                       
                    



                    <h3 className={styles.about}>About</h3>

                    <div className={styles.caracteristicas}>
                        <div className={styles.peso}>
                            <TbWeight className={styles.peso_icon}/>
                            <p className={styles.peso_text}>{state.pesop} kg</p>
                            <p className={styles.peso_text_fixed}>Weight</p>
                        </div>

                        <div className={styles.tamanho}>
                            <VscSymbolRuler className={styles.tamanho_icon}/>
                            <p className={styles.tamanho_text}>{state.tamanhop}  m</p>
                            <p className={styles.tamanho_text_fixed}>Height</p>

                        </div>
                        <div className={styles.habilidade}>
                            <p className={styles.habilidade_text_um}>{state.habum} </p>
                            <p className={styles.habilidade_text_dois}>{state.habdois} </p>
                            <p className={styles.habilidade_text_fixed}>Ability</p>
                            
                        </div>
                    </div>

                    <h3 className={styles.titulo_stats}>Base stats</h3> 
                    <div className={styles.container_divisoria}>
                    <div className={styles.divisoria}></div>
                        </div>
                    
                    <div className={styles.container_stats}>
                        <p>HPﾠﾠ<text>{state.hpp}</text></p>
                        <p>ATKﾠ<text>{state.atkp}</text></p>
                        <p>DEFﾠ<text>{state.defp}</text></p>
                        <p>SATK<text>{state.satkp}</text></p>
                        <p>SDEF<text>{state.sdefp}</text></p>
                        <p>SPDﾠ<text>{state.spdp}</text></p>
                    </div>
                </div> 
                
            </div>    
    )

    function typeColor(){
    

        if(duashab == false){

            
        }
    
    }
    
    
}

export default InfoPokemon