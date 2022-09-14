import { useState } from 'react'
import styles from './App.module.css'
import logo from './assets/powered.png'
import { GridItem } from './components/GridItem/GridItem'
import { levels, calculateImc } from './helpers/imc'
import leftArrowImg from './assets/leftarrow.png'
import { Level } from './helpers/imc'
const App = () =>{

  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [toShow, setToShow] = useState <Level | null>(null)

  function btnCalcular () {
    if(altura && peso) {
      setToShow(calculateImc(altura, peso))
    } else {
      alert('Digite todos os campos')
    }
  }

  const backButton = () =>{
    setToShow(null)
    setAltura(0)
    setPeso(0)
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt="logo" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundia da Saúde para calcular o peso ideal de cada pessoa.</p>

          <input type="number"
           placeholder='Digite a sua altura. Ex: 1.5 (em metros)' 
            value={altura > 0 ? altura : ''} 
            onChange={e => setAltura(parseFloat(e.target.value))} 
            disabled={toShow ? true : false}
          />
          <input type="number"
           placeholder='Digite o seu peso. Ex: 75.3 (em kg)' 
            value={peso > 0 ? peso : ''} 
            onChange={e => setPeso(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={btnCalcular} disabled={toShow ? true : false} >Calcular</button>
        </div>

        <div className={styles.rigthSide}>
          {!toShow&& 
            <div className={styles.grid} >
                {levels.map((item, key) => (
                    <GridItem key={key} item={item}/>
                    ))}
            </div>
            }
          
          {toShow &&
              <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={backButton}>
                  <img src={leftArrowImg} alt="voltar" width={25}/>
                </div>
                <GridItem item={toShow}/>
              </div>
          }
          
          
        </div>
      </div>
    </div>
  )
}

export default App;