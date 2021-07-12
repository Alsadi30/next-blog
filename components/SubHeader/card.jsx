import Image from 'next/image'
 

export default function Card(props) {
    const {name,icon} = props.categorys
    return (
        <div className='card'>
           
               
            <div>
                <Image
                    src={icon.cetIcon}
                    width={25}
                    height={20}
                    alt='icon'
                    />
                </div>
            <div className='title'>
                {name}
                    </div>
                   
                
        </div>
    )
}
