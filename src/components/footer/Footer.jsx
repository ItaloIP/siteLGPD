import { Youtube, Mail } from 'lucide-react'

function Footer(){
    return(
        <footer className="bg-black p-4">
            <div className='text-white flex gap-3 flex-col items-center'>
                <div className="flex flex-col gap-2.5">
                  <a href='https://www.youtube.com/channel/UCpcAz-ODwwABsw9OALZJo2A' className='flex'>
                    <Youtube className='mr-1'/>
                    ItaloIP
                  </a>
                  <a href='mailto:italopereiravieira@gmail.com' className='flex'>
                    <Mail className='mr-1'/>
                    Contact
                  </a>
                </div>
                    <span className='flex text-center'>
                        Feito com ❤️ por Italo
                    </span>
            </div>
        </footer>
    )
}

export default Footer