import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="container py-10">
      <div className="flex flex-col justify-center items-center space-y-8">
        <h2 className="heading-2 text-primary">{t('aboutUsH2')}</h2>
        <p className="para-medium text-center text-white">{t('aboutUsPara')}</p>
      </div>
    </div>
  )
}

export default AboutUs
