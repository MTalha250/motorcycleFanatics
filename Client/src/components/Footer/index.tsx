import Behance from "../../assets/Behance.png"
import Logo from "../../assets/Logo.png"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center min-h-[320px] space-y-10">
        
        <motion.ul
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-7 para-small flex-wrap"
        >
          <li className="my-2 menu-hover">{t('FtrHome')}</li>
          <li className="my-2 menu-hover">{t('FtrMembers')}</li>
          <li className="my-2 menu-hover">
            <Link to='/checkout'>{t('FtrCheckout')}</Link>
          </li>
          <li className="my-2 menu-hover">{t('FtrAbout')}</li>
          <li className="my-2 menu-hover">{t('FtrContact')}</li>
        </motion.ul>

        <div className="flex justify-center items-center space-x-2">
          <img src={Behance} alt={t('FtrIconAlt')} className="icon-hover" />
          <img src={Behance} alt={t('FtrIconAlt')} className="icon-hover" />
          <img src={Behance} alt={t('FtrIconAlt')} className="icon-hover" />
          <img src={Behance} alt={t('FtrIconAlt')} className="icon-hover" />
        </div>

        <img src={Logo} alt={t('FtrLogoAlt')} />

        <ul className="flex justify-center items-center space-x-7 para-small md:self-end">
          <li className="menu-hover">{t('FtrPrivacyPolicy')}</li>
          <li className="menu-hover">{t('FtrTermsConditions')}</li>
        </ul>
      </div>
    </div>
  );
};


export default Footer
