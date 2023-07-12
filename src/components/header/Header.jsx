import { useState } from "react";

function Header(){
    let [nome,setNome] = useState('Desconhecido');
    function changeName(){
        setNome(nome = prompt());
    }


    function buttonDark(props){

    }
    
    return (
        <>
        <header className="bg-neutral-800 py-5  mb-5 sticky top-0">
            <div className="mx-5 flex flex-row justify-between">
                <div className="flex flex-row cursor-pointer" onClick={changeName}>
    
                    <img src="https://i0.wp.com/omeudiadia.com.br/wp-content/uploads/2022/04/gatito.webp?resize=700%2C592&amp;ssl=1" alt="" width="50px" height="40px"/>
                    <div className="flex items-center mx-2.5" id="Username">{nome}</div>
                </div>
                <input type="button" value="Português/BR" className="bg-neutral-950 rounded text-white border-white border-solid border-2 p-1 cursor-pointer transform transition duration-300 hover:scale-110 hidden" onClick={buttonDark}/>
                <input type="button" value="English/USA" className="bg-neutral-950 rounded text-white border-white border-solid border-2 p-1 cursor-pointer transform transition duration-300 hover:scale-110 " onClick={buttonDark}/>
            </div>
        </header>
        </>
    )
}

export default Header
