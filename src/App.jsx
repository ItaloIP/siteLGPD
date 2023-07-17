import { useState } from 'react';
import Footer from './components/footer/Footer';
import Site from './components/site/Site'
import './App.css';


function App() {
        // Tentar reduzir 4 à 8
        let [translate, setTranslate] = useState('English/US')
        let [nome, setNome] = useState('Desconhecido');
        let [translateSite, setTranslateSite] = useState(false)

        function changeName(){
            setNome(nome = prompt());
        }
        
        function Translate(){
            
            if (translate == 'English/US') {
                setTranslate(translate = 'Portugues/BR')
                setTranslateSite(translateSite = true)
                
            }
            else{
                setTranslate(translate = 'English/US')
                setTranslateSite(translateSite = false)
            }
    
        }
    
  return (
    <>
    <header className="bg-neutral-800 py-5  mb-5 sticky top-0">
        <div className="mx-5 flex flex-row justify-between">
            <div className="flex flex-row cursor-pointer" onClick={changeName}>
    
                <img src="https://i0.wp.com/omeudiadia.com.br/wp-content/uploads/2022/04/gatito.webp?resize=700%2C592&amp;ssl=1" alt="" width="50px" height="40px"/>
                <div className="flex items-center mx-2.5 text-white font-normal " id="Username">{nome}</div>
            </div>
            <button  className="bg-neutral-950 rounded text-white border-white border-solid border-2 p-1 cursor-pointer transform transition duration-300 hover:scale-110 " onClick={Translate}>{translate}</button>
        </div>
    </header>

    <Site translate={translateSite}/>
    <Footer/>
    </>
  )
  
};

export default App
