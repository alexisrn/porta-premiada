import PortaModel from '@/model/porta'
import style from '../../styles/Porta.module.css'
import Presente from '../Presente'

interface PortaProps{
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}
export default function Porta(props:any){
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? style.selecionada : ''
    
    const alternarSelecao = (e:any) => props.onChange(porta.alternarSelecao())
    const abrir = (e:any) => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    const renderizarPorta = () => {
        return(
            <>
            
             <div className={style.porta}>
            <div className={style.numero}>{porta.numero}</div>
        <div className={style.macaneta} onClick={abrir}></div>
        </div>
   
   
            </>
        )
    }
    return(
        <>
        <div className={style.area} onClick={alternarSelecao}>
        <div className={`${style.estrutura} ${selecionada}`}>
        {porta.fechada ?  renderizarPorta() : 
        porta.temPresente ? <Presente></Presente> : false }
        </div>
        <div className={style.chao}></div>
        </div>
        
        </>
    )
}