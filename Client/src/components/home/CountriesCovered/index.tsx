import RedDot from "../../../assets/redDot.svg"
import Map from "../../../assets/countries.png"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

const CounteriesCovered = () => {
    const { t } = useTranslation();
    return (
        <div className='container py-14'>
            <div className='flex flex-col justify-center items-center space-y-12'>
                <motion.h2
                     initial={{ opacity: 0, x: -75 , }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.9, delay: 0.25 }}
                     viewport={{ once: true }}
                className="heading-2 text-primary capitalize text-center">{t('countriesCoveredH2')}</motion.h2>
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center gap-2"><img src={RedDot} alt="Point" /><p className="para-large text-white">{t("Switzerland")}</p></div>
                    <div className="flex justify-center items-center gap-2"><img src={RedDot} alt="Point" /><p className="para-large text-white">{t("Austria")}</p></div>
                    <div className="flex justify-center items-center gap-2"><img src={RedDot} alt="Point" /><p className="para-large text-white">{t("Germany")}</p></div>
                </div>
                <motion.img
                     initial={{ opacity: 0, y: -75 ,scale:0.7 }}
                     whileInView={{ opacity: 1, y: 0 , scale:1 }}
                     transition={{ duration: 1.1, delay: 0.25 }}
                     viewport={{ once: true }}
                src={Map} alt="map" className="w-full" />
            </div>
        </div>
    )
}

export default CounteriesCovered
