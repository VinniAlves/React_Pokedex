import { Link } from 'react-router-dom'
import {MdArrowBack} from 'react-icons/md'
import styles from './LinButtom.module.css'

function LinkButtom(){
    return(
        
        <Link to='/'>
            <MdArrowBack className={styles.icon}/>
        </Link>
            
       
    )
}

export default LinkButtom