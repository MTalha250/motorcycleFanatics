import i18n from 'i18next'
import { initReactI18next } from "react-i18next"


i18n.use(initReactI18next).init({
    debug : true,
    lng : 'de',
    fallbackLng : 'en',

    resources : {
        en : {
            translation : {
                heroH1:"Secure Your Exclusive License in Germany, Austria, or Switzerland!"
            }
        },
        de : {
            translation : {
                heroH1 : "Sichern Sie sich Ihre exklusive Lizenz in Deutschland, Österreich oder der Schweiz!"
            }
        }
    }
})


export default i18n;