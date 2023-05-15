import styles from './Preview.module.css'
import{MdNavigateBefore, MdNavigateNext} from 'react-icons/md'



function Preview({clicknext,clickback}){
    return(
        <div className={styles.container}>  
            
           
            <button className={styles.back} onClick={clickback}><MdNavigateBefore className={styles.icon_back}/></button>
            
            <button className={styles.next} onClick={clicknext}> <MdNavigateNext className={styles.icon_next}/></button>
           
        </div>
    )

}

export default Preview