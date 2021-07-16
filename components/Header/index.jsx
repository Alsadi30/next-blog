import Image from 'next/image'
import Logo2 from '../../assets/icons/Logo2.png'
import SearchIcon from '../../assets/icons/SearchIcon.png'
import Link from 'next/link'


export default function index() {
    return (
        <div className='head-container'>
               <Link href='/'>
                <div className='BrandLogo'>
                <Image
               src={Logo2}
               alt="Picture of the author"
               width={130}
               height={50}
                />
                </div>
                </Link>
            <div className='input-search'>

                <Image
                    src={SearchIcon}
                    alt='search'
                    width={17}
                    height={16}
                />

                <input
                    className='input-field'
                name='search'
                id='search'
                placeholder='Discover New Articles,Post..'
                type='text'
                />
           </div>

            <div className='nav'>
            <Link href='/'>
                    <a  className='nav-item'>
                      Home
                    </a>
                </Link >
                <Link  href='/blog'>
                    <a  className='nav-item'>
                      Blog
                    </a>
                    </Link >
                <Link  href='/contact'>
                    <a className='nav-item'>
                      Contact
                    </a>
                    </Link >
            </div>

        </div>
    )
}
