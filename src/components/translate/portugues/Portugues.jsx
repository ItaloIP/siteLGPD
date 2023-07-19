function Portugues(){
    return(
        <section className='flex flex-col flex-nowrap m-2.5'>
        <h1 className="text-4xl font-bold">A LGPD</h1>  
        <p className="m-2.5 font-medium text-slate-900">A LGPD (Lei Geral de Proteção de Dados Pessoais, em português) é uma lei implantada no Brasil (como um GDPR, ou Regulamento Geral de Proteção de Dados na EUROPA) criada em julho de 2018 com o objetivo de proteger os dados dos brasileiros. De acordo com a LGPD, o tratamento de dados pessoais pode ser realizado por dois agentes de tratamento, o Controlador e o Operador. Além deles, existe a figura do Encarregado, que é a pessoa designada pelo Controlador para atuar como canal de comunicação entre o Controlador, o Operador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD). Se as empresas do Brasil não seguirem essa lei, terão que pagar 2% do seu faturamento e correrão o risco de fechar.</p>
        <br/>    
        <img className="m-3 " src="https://gtrigueiro.com.br/wp-content/uploads/2021/09/lgpd-vanzolini-1200x874-1-768x559.jpg" alt="LGPD Image"/>
        <br/>
        <h1 className="text-4xl font-bold">Diferença entre GDPR e LGPD</h1>
        <p className="m-2.5 font-medium text-slate-900">Além da diferença de que o GDPR só funciona na Europa, ambos possuem diferenças quando comparados, conforme a seguir:</p>
        <table>
          <tbody className="border-solid border-black border-2">
            <tr>
                <th className="border-solid border-black border-2">LGPD</th>
                <th className="border-solid border-black border-2">GDPR</th>
            </tr>
            <tr>
                <th colSpan="2">Princípios de Privacidade e Tratamento</th>
            </tr>
            <tr className="border-solid border-black border-2">
                <td className="border-solid border-black border-2 px-2">
                    Meta; <br/>
                    Adequação; <br/>
                    Necessidade; <br/>
                    Livre acesso; <br/>
                    Qualidade dos dados; <br/>
                    Transparência; <br/>
                    Segurança; <br/>
                    Prevêção; <br/>
                    Não discriminação; <br/>
                    Responsabilização. <br/>
                </td>
                <td className="border-solid border-black border-2 px-2">
                    Licitude; <br/>
                    Lealdade; <br/>
                    Transparência; <br/>
                    Limitação das finalidades; <br/>
                    Minimização dos dados; <br/>
                    Exatidão; <br/>
                    Limitação da conservação; <br/>
                    Integridade e confiabilidade; <br/>
                    Responsabilidade.
                </td>
            </tr>
            <tr>
                <th className='p-1' colSpan="2">Relação Entre Controlador de Dados e Operador de Dados</th>
            </tr>
            <tr>
                <td className="border-solid border-black border-2 px-2">
                A LGPD requer somente que o Operador execute o tratamento dos dados conforme orientação do controlador.
                </td>
                <td className="border-solid border-black border-2 px-2">
                GDPR estabelece a exigência de um contrato entre Controlador e Operador de Dados, que explicite o tratamento dos dados.
                </td>
            </tr>
            <tr>
                <th colSpan="2">Penalties and Sanctions</th>
            </tr>
            <tr>
                <td className="border-solid border-black border-2 px-2">
                A LGPD define multas, sanções e processos civis a controladores e operadores, de acordo com o tipo de evento e severidade.
                </td>
                <td className="border-solid border-black border-2 px-2">
                A GDPR define multas, sanções e processos civis a controladores e operadores, de acordo com o tipo de evento e severidade.
                </td>
            </tr>
            </tbody>
        </table>
        <img className="m-3" src="https://images.prismic.io/secure-privacy/7987972a-edbb-42d1-a9d9-191aaaed5c3b_lgpd-vs-gdpr-key-similarities-and-differences.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=45" alt="LGPD vs GDPR"/>
    </section>
    )
}
export default Portugues