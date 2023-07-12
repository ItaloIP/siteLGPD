import './App.css';
import Header from './components/header/Header';



function App() {
  return (
    <div>
      <Header/>
      <section className='flex flex-col flex-nowrap m-2.5'>
        <h1 className="text-4xl font-bold">The LGPD</h1>  
        <p className="m-2.5 font-medium text-slate-900">The LGPD (Lei Geral de Proteção de Dados Pessoais, in Portuguese) is a law implanted in Brazil (like a GDPR, or General Data Protection Regulation in EUROPE) created in Jul 2018 with the goal of protecting Brazilians' data. Under the LGPD, the processing of personal data can be performed by two processing agents, the Controller and the Operator. In addition to them, there is the figure of the Person in Charge, who is the person appointed by the Controller to act as a communication channel between the Controller, the Operator, the data subjects and the National Data Protection Authority (ANPD). If the enterprises of Brazil don't follow this law,  they will have to pay 2% of your billing and have to risk closing. 
        </p>
        <br/>    
        <img className="m-3" src="https://gtrigueiro.com.br/wp-content/uploads/2021/09/lgpd-vanzolini-1200x874-1-768x559.jpg" alt="LGPD Image"/>
        <br/>
        
        <h1 className="text-4xl font-bold">Difference between GDPR and LGPD</h1>
        
        <p className="m-2.5 font-medium text-slate-900">Besides the difference that GDPR only works in Europe, both have diversities when compared, as next: </p>
        
        <table>
          <tbody className="border-solid border-black border-2">
            <tr>
                <th className="border-solid border-black border-2">LGPD</th>
                <th className="border-solid border-black border-2">GDPR</th>
            </tr>
            <tr>
                <th colSpan="2">Principles of Privacy and Tratament</th>
            </tr>
            <tr className="border-solid border-black border-2">
                <td className="border-solid border-black border-2 px-2">
                    Goal; <br/>
                    Adequacy; <br/>
                    Need; <br/>
                    Free acess; <br/>
                    Data quality; <br/>
                    Transparency; <br/>
                    Security; <br/>
                    Prevention; <br/>
                    Non-discrimination; <br/>
                    Accountability. <br/>
                </td>
                <td className="border-solid border-black border-2 px-2">
                    Legality; <br/>
                    Loyalty; <br/>
                    Transparency; <br/>
                    Purpose limitation; <br/>
                    Data minimization; <br/>
                    Accuracy; <br/>
                    Conservation limitation; <br/>
                    Integrity and reliability; <br/>
                    Responsibility.
                </td>
            </tr>
            <tr>
                <th className='p-1' colSpan="2">Relationship Between Data Controller and Data Operator</th>
            </tr>
            <tr>
                <td className="border-solid border-black border-2 px-2">
                    The LGPD only requires that the Operator carry out the processing of data as directed by the controller.
                </td>
                <td className="border-solid border-black border-2 px-2">
                    GDPR establishes the requirement of a contract between Controller and Data Operator, which explains the processing of data.
                </td>
            </tr>
            <tr>
                <th colSpan="2">Penalties and Sanctions</th>
            </tr>
            <tr>
                <td className="border-solid border-black border-2 px-2">
                    The LGPD defines fines, sanctions and civil proceedings for controllers and operators, according to the type of event and severity.
                </td>
                <td className="border-solid border-black border-2 px-2">
                    The GDPR defines fines, sanctions and civil proceedings for controllers and operators, according to the type of event and severity.
                </td>
            </tr>
            </tbody>
        </table>
        <img className="m-3" src="https://images.prismic.io/secure-privacy/7987972a-edbb-42d1-a9d9-191aaaed5c3b_lgpd-vs-gdpr-key-similarities-and-differences.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=45" alt="LGPD vs GDPR"/>
    </section>
    </div>
  )
};

export default App
