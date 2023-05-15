import styles from './Card.module.css'
import {BrowserRouter as Router , Route, Routes, Link} from "react-router-dom"
import InfoPokemon from '../InfoPokemon'
import Preview from '../../Preview';

function Card({namePokemon, img
,tipoNomeum,tipoNomedois,peso,tamanho,habilidadeUm,habilidadeDois,
hp,atk,def,satk,sdef,spd}){
 
    

        return(
            
        <div className={styles.menu_container}>
            
            <Link state={{nomep:namePokemon,
            tipoum:tipoNomeum,
            tipodois:tipoNomedois,
            imagemp:img,           
            pesop:peso,
            habum:habilidadeUm,
            habdois:habilidadeDois,
            tamanhop:tamanho,
            hpp:hp,
            atkp:atk,
            defp:def,
            satkp:satk,
            sdefp:sdef,
            spdp:spd
        }}
             to='/infopokemon' > 
                <div className={styles.list_itens}>    

                        <img src={img}
                        alt="poke" className={styles.img_poke} width='80%'></img>

                    <div className={styles.list_itens_border}></div>
                    <p className={styles.nome} >{namePokemon}</p>
                    
                </div>
            </Link>
        </div>


    )
}

export default Card;