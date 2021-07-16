import Logo2 from '../../assets/icons/Logo2.png'
import CopyRight from '../../assets/icons/CopyRight.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='logo-copy'>
                <Image className=''
                    src={Logo2}
                    width={150}
                    height={50}
                    alt='logo'
                    />
                <div className='copy-rights'>
                    <span style={{padding:'5px'}}>
                        <Image
                            src={CopyRight}
                            width={13}
                            height={13}
                            alt='CopyRight'
                            />
                    </span>
                2021, All Rights Reserved.
                </div>
            </div>
            <div>
                <div className='foot-head'>
                    Quick Links
                </div>
                <div className='foot-link'>
                    Home
                </div>
                <div className='foot-link'>
                    Blogs
                </div>
                <div className='foot-link'>
                    Contact us
                </div>
            </div>
            <div>
            <div className='foot-head'>
                    Social Links 
                </div>
                <div className='social-link'>
                    Facebook 
                </div>
                <div className='social-link'>
                    Youtube 
                </div>
                <div className='social-link'>
                    Github 
                </div>
            </div>
            <div className='copy-rights-small-screen'>
                    <span style={{padding:'5px'}}>
                        <Image
                            src={CopyRight}
                            width={13}
                            height={13}
                            alt='CopyRight'
                            />
                    </span>
                2021, All Rights Reserved.
                </div>
        </div>
    )
}
