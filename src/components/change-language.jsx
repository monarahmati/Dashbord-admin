import flagUsa from '../assets/images/icons8-usa-48.png'
import flagFa from '../assets/images/icons8-iran-48.png'
import { useEffect, useState , useRef } from 'react';
import { useAppContext } from '../context/app/app-context';

const changeLanguage = () => {

    
    const [show , setShow ] = useState(false)
    const ref = useRef()
    const { language , changeLanguage } = useAppContext()
    
    useEffect(() => {
        setShow(false)
    }, [language])

    useEffect(() => {
        const checkIfClickOutside = (e) => {
            if (show && ref.current && !ref.current.contains(e.target)){
                setShow(!show)
            }
        }
        document.addEventListener('mousedown' , checkIfClickOutside)
         return () => {
            document.removeEventListener('mousedown' , checkIfClickOutside)
         }
    } , [show])




    return (
        <div className="dropdown">
            <a className="nav-flag dropdown-toggle" onClick={() => setShow(!show)}>
                <img src={ language === 'fa' ? flagFa : flagUsa } alt="En" />
            </a>

            <div ref={ref} className={`dropdown-menu dropdown-menu-end ${show ? 'show' : undefined }`}>
                <a className="dropdown-item fw-bolder d-flex align-items-center gap-2" style={{textAlign : language === 'fa' ? "right" : "left"}}  onClick={() => changeLanguage("en")}>
                    <img src={flagUsa} alt="flagUSA" className='ms-2'/>
                    <span className="align-middle"> انگلیسی</span>
                </a>
                <a className="dropdown-item fw-bolder d-flex align-items-center gap-2" style={{textAlign : language === 'fa' ? "right" : "left"}} onClick={() => changeLanguage('fa')}>
                    <img src={flagFa} alt="flagUSA" className='ms-2'/>
                    <span className="align-middle"> فارسی </span>
                </a>
            </div>
        </div>
    );
};

export default changeLanguage;