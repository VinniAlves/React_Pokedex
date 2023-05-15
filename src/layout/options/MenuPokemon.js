
import {BrowserRouter as Router , Route, Routes, Link} from "react-router-dom"
import styles from  './MenuPokemon.module.css'
import InfoPokemon from './InfoPokemon'
import { useEffect, useState } from "react"
import Card from "./infocontainer/Card";
import Preview from "../Preview";
import NavBar from "../NavBar";


 function MenuPokemon({dados,imgName,to, pesquisarProps}){

    const[urlprincipal,setUrlprincipal]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nomepoke , setNomepoke] = useState([]);
    const[urlnext,setUrlnext] = useState("");
    const[urlback,setUrlback] = useState("");
    const[pesquisa, setPesquisa] = useState("")

   

    const next = ()=>{
        setUrlprincipal(urlnext)
        
    }

    const back = ()=>{
        setUrlprincipal(urlback)
        
    }



    useEffect(()=>{
        pushapi()
    },[])


    const pushapi= ()=>{
        fetch(urlprincipal,{
            method:'get',
            headers:{
                'Content-Type': 'application/json',
            }
        }).then((resp)=> resp.json())
        .then((data)=>{ 
                setUrlnext(data.next)
                setUrlback(data.previous)
                setNomepoke(data.results)
                })
        .catch((err)=>console.log(err))
            
        }

        useEffect(()=>{
            pushapi()
        },[urlprincipal])
 
   
 

    return(
       
        <div className={styles.container}>
            
            <Preview clickback={back} clicknext={next}/>
    {nomepoke.length > 0 && nomepoke.map((dados)=>(
             
             <Cardfunc urlfunc={dados.url} nomefunc={dados.name} />
             
            
             ))
         }
   
        </div>
        
    )

   
        function Cardfunc({ urlfunc,nomefunc}){
            

        const[tipoum, setTipoum] = useState(null)
        const[tipodois, setTipodois] = useState(null)

        const [imgfunc, setImgfunc] = useState(null)
        const [ps, setPs] = useState(null)
        const [tam,setTam] =useState(null)
        const [habum,setHabum] =useState(null)
        const [habdois,setHabdois] =useState(null)
        const [hp,setHp] =useState(null)
        const [atk,setAtk] =useState(null)
        const [def,setDef] =useState(null)
        const [satk, setSatk] =useState(null)
        const [sdef,setSdef] =useState(null)
        const [spd,setSpd] =useState(null)

        useEffect(()=>{
            fetch(urlfunc ,{
                method:'get',
                headers:{
                    'Content-Type': 'application/json',
                    }
                }).then((resp)=> resp.json())
                    .then((dataimg)=>{ 
                    //console.log(dataimg.sprites.other.dream_world)
                    setImgfunc(dataimg.sprites.other.dream_world.front_default)
                    
                      
                    setTipoum(dataimg.types[0]?.type?.name)
                    setTipodois(dataimg.types[1]?.type?.name)
                    setPs(dataimg.weight)
                    setTam(dataimg.height)
                    setHabum(dataimg.abilities[0]?.ability?.name)
                    setHabdois(dataimg.abilities[1]?.ability?.name)
                     setHp(dataimg.stats[0].base_stat)
                     setAtk(dataimg.stats[1].base_stat)
                     setDef(dataimg.stats[2].base_stat)
                     setSatk(dataimg.stats[3].base_stat)
                     setSdef(dataimg.stats[4].base_stat)
                     setSpd(dataimg.stats[5].base_stat)
                    
                }) 
            },[urlfunc])
        return <Card namePokemon={nomefunc} img={imgfunc} url={urlfunc}
        tipoNomeum={tipoum} tipoNomedois={tipodois}
            peso={ps} tamanho={tam} habilidadeUm={habum} habilidadeDois={habdois}
            hp={hp} atk={atk} def={def} satk={satk} sdef={sdef} spd={spd}
        />
       
        }


       
 }

 export default MenuPokemon