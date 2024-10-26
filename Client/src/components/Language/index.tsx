import { CircleX, Globe } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next"
import America from '../../assets/america.png'
import Germany from '../../assets/germany.png'

function Language() {
    const [isGlobeOpen, setIsGlobeOpen] = useState(false)
    const { i18n } = useTranslation();
    const languages = [
        {
            code: 'en', lang: "English", flag : America
        },
        {
            code: 'de', lang: "German" , flag : Germany
        }
    ]
    return (
            <div className="relative mt-1">
            <div className="text-white hover:cursor-pointer" onClick={() => setIsGlobeOpen(prev => !prev)}>
                {!isGlobeOpen? <Globe size={25} /> : <CircleX size={25}/>}
            </div>
            {
                isGlobeOpen &&

                <ul className="absolute top-10 w-[140px] left-3 bg-gray-200 text-primary rounded-[5px] font-medium flex flex-col gap-1">
                    {
                        languages.map((lan) => (
                            <li key={lan.code} onClick={() => {i18n.changeLanguage(lan.code), setIsGlobeOpen(false)}}
                                className="p-2 hover:bg-primary hover:text-white hover:cursor-pointer rounded-[5px]"
                            >
                                {lan.lang}
                                <span><img src={lan.flag} alt="flag" className="inline w-[30px] ml-3"/></span>
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default Language