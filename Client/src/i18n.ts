import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    debug: true,
    lng: 'de',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                heroH1: "Secure Your Exclusive License in Germany, Austria, or Switzerland!",
                heroPara: "Check the availability of your region and secure your spot in just a few clicks. Start by entering the first two digits of your postcode.",
                aboutUsH2: 'ABOUT US:',
                aboutUsPara: "At Motorcycle Fanatics, we are dedicated to providing exclusive access to high-demand regional areas in Germany, Austria, and Switzerland. By offering licenses and memberships for these select regions, we empower businesses and individuals to secure their presence in key markets. Whether you're looking to grow your brand or expand your network, our platform makes it easy to search for available areas and secure them with a simple, user-friendly process. With flexible subscription plans, secure payment options, and dedicated customer support, we are committed to helping you succeed in your chosen region. Join us today and take the next step toward unlocking new opportunities!",
                countriesCoveredH2: 'The countries we covered',
                howItWorksH2: 'How it works',
                howItWorksP1: 'First sign up to our website by filling up your details and login to your account.',
                howItWorksP2: 'Enter the first two digits of your postcode to search for availability in your region.',
                howItWorksP3: "If area is available, You'll be redirected to the page where you can subscribe our plan.",
                enterPostCodeDigitsPara: "Enter the first two digits of your postcode",
                getInTouchLocation: "Location",
                getInTouchEmail: "Email",
                getInTouchPhone: "Phone",
                searchNowBtn: "Search Now",
                newsLetterh3: "Subscribe to our newsletter",
                newsLetterPara: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
                getInTouchH4: "GET IN TOUCH",
                SignUpH2: 'Get Started Now',
                welcomeBack: "Welcome Back",
                videoVerification: "Video Verification",
                videoVerificationDesc: "Watch the full video to get verified and access the platform.",
                checkoutHeroH1: "Selected Area is Available",
                checkoutHero: "Complete your subscription and be part of our network. Choose your preferred payment method below.",
                pricingH3: "PRICING",
                pricingP: "We offer secure payment methods including PayPal, credit card, and Klarna. Your subscription will automatically renew every month, and you can cancel at any time.",
                subscribeThisPlan: "Subscribe this Plan",
                submit : "Submit",
                serachNow : "Search Now",
                searching : "Searching...",
                Switzerland:"Switzerland",
                Germany : "Germany",
                Austria : "Austria",

                //Form Login & Signup
                formEmail: "Email",
                emailPlaceHolder: "Enter Your Email",
                formPassword: "Password",
                passwordPlaceHolder: "Enter Your Password",
                loggingBtn: "Logging in...",
                signInBtn: "Sign In",
                dontHaveAccount: "Don't have an account?",
                signUp: "Sign Up",

                // Registration Form Translations
                FirstName: "First Name", 
                FirstNamePlaceholder: "Enter your first name",
                LastName: "Last Name", 
                LastNamePlaceholder: "Enter your last name",
                Email: "Email", 
                EmailPlaceholder: "Enter your email",
                PhoneNumber: "Phone Number", 
                PhoneNumberPlaceholder: "Enter your phone number",
                Address: "Address", 
                AddressPlaceholder: "Enter your address",
                City: "City", 
                CityPlaceholder: "Enter your city",
                Country: "Country", 
                CountryPlaceholder: "Enter your country", 
                PostalCode: "Postal Code", 
                PostalCodePlaceholder: "Enter your postal code", 
                Password: "Password", 
                PasswordPlaceholder: "Enter your password", 
                ConfirmPassword: "Confirm Password", 
                ConfirmPasswordPlaceholder: "Re-enter your password", 
                TermsAndConditions: "I agree to the terms and conditions", 
                SignUp: "Sign Up", 
                Submitting: "Submitting...", 
                AlreadyHaveAccount: "Already have an account?", 
                login_link: "Login", 

                //Footer
                FtrHome: "Home",                      
                FtrMembers: "Just For Members",       
                FtrCheckout: "Check Out",             
                FtrAbout: "About Us",                 
                FtrContact: "Contact Us",             
                FtrPrivacyPolicy: "Privacy Policy",   
                FtrTermsConditions: "Terms and Conditions", 
                FtrIconAlt: "Social icon",            
                FtrLogoAlt: "Company Logo",   

                //Email Page
                verifyEmail : "Verify Your Email Address",
                verifyBtn : "Verify and Continue"
            }
        },
        
        de: {
            translation: {
                heroH1: "Sichern Sie sich Ihre exklusive Lizenz in Deutschland, Österreich oder der Schweiz!",
                heroPara: "Prüfen Sie die Verfügbarkeit Ihrer Region und sichern Sie sich mit wenigen Klicks Ihren Platz. Geben Sie zunächst die ersten beiden Ziffern Ihrer Postleitzahl ein.",
                aboutUsH2: 'ÜBER UNS:',
                aboutUsPara: "Bei Motorcycle Fanatics bieten wir exklusiven Zugang zu regionalen Gebieten mit hoher Nachfrage in Deutschland, Österreich und der Schweiz. Durch die Bereitstellung von Lizenzen und Mitgliedschaften für diese ausgewählten Regionen ermöglichen wir es Unternehmen und Einzelpersonen, ihre Präsenz in wichtigen Märkten zu sichern. Egal, ob Sie Ihre Marke ausbauen oder Ihr Netzwerk erweitern möchten, unsere Plattform ermöglicht es Ihnen, verfügbare Gebiete einfach zu suchen und sie mit einem einfachen, benutzerfreundlichen Prozess zu sichern. Mit flexiblen Abonnementplänen, sicheren Zahlungsmöglichkeiten und engagiertem Kundenservice unterstützen wir Sie dabei, in Ihrer gewählten Region erfolgreich zu sein. Werden Sie noch heute Teil unserer Plattform und nutzen Sie neue Chancen!",
                countriesCoveredH2: 'Die abgedeckten Länder',
                howItWorksH2: 'So funktioniert es',
                howItWorksP1: "Registrieren Sie sich mit Ihren Daten.",
                howItWorksP2: "Geben Sie die ersten zwei PLZ-Ziffern ein.",
                howItWorksP3: "Ist das Gebiet verfügbar, können Sie den Plan abonnieren.",
                enterPostCodeDigitsPara: "Geben Sie die ersten beiden Ziffern Ihrer Postleitzahl ein",
                searchNowBtn: "Jetzt suchen",
                newsLetterh3: "Abonnieren Sie unseren Newsletter",
                newsLetterPara: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
                getInTouchH4: "KONTAKT AUFNEHMEN",
                welcomeBack: "Willkommen zurück",
                SignUpH2: 'Jetzt starten',
                videoVerification: "Videoverifizierung",
                videoVerificationDesc: "Sehen Sie sich das vollständige Video an, um sich zu verifizieren und Zugang zur Plattform zu erhalten.",
                checkoutHeroH1: "Ausgewähltes Gebiet ist verfügbar",
                checkoutHero: "Schließen Sie Ihr Abonnement ab und werden Sie Teil unseres Netzwerks. Wählen Sie unten Ihre bevorzugte Zahlungsmethode.",
                pricingH3: "PREISE",
                pricingP: "Wir bieten sichere Zahlungsmethoden, einschließlich PayPal, Kreditkarte und Klarna. Ihr Abonnement wird automatisch jeden Monat erneuert und kann jederzeit gekündigt werden.",
                subscribeThisPlan: "Diesen Plan abonnieren",
                submit: "Absenden",
                serachNow: "Jetzt suchen",
                searching: "Suchen...",
                Switzerland: "Schweiz",
                Germany: "Deutschland",
                Austria: "Österreich",
        
                //Form Login & Signup
                formEmail: "E-Mail",
                emailPlaceHolder: "Geben Sie Ihre E-Mail ein",
                formPassword: "Passwort",
                passwordPlaceHolder: "Geben Sie Ihr Passwort ein",
                loggingBtn: "Einloggen...",
                signInBtn: "Einloggen",
                dontHaveAccount: "Noch keinen Account?",
                signUp: "Registrieren",
        
                // Registration Form Translations
                FirstName: "Vorname", 
                FirstNamePlaceholder: "Geben Sie Ihren Vornamen ein",
                LastName: "Nachname", 
                LastNamePlaceholder: "Geben Sie Ihren Nachnamen ein",
                Email: "E-Mail", 
                EmailPlaceholder: "Geben Sie Ihre E-Mail ein",
                PhoneNumber: "Telefonnummer", 
                PhoneNumberPlaceholder: "Geben Sie Ihre Telefonnummer ein",
                Address: "Adresse", 
                AddressPlaceholder: "Geben Sie Ihre Adresse ein",
                City: "Stadt", 
                CityPlaceholder: "Geben Sie Ihre Stadt ein",
                Country: "Land", 
                CountryPlaceholder: "Geben Sie Ihr Land ein", 
                PostalCode: "Postleitzahl", 
                PostalCodePlaceholder: "Geben Sie Ihre Postleitzahl ein", 
                Password: "Passwort", 
                PasswordPlaceholder: "Geben Sie Ihr Passwort ein", 
                ConfirmPassword: "Passwort bestätigen", 
                ConfirmPasswordPlaceholder: "Geben Sie Ihr Passwort erneut ein", 
                TermsAndConditions: "Ich stimme den allgemeinen Geschäftsbedingungen zu", 
                SignUp: "Registrieren", 
                Submitting: "Absenden...", 
                AlreadyHaveAccount: "Schon ein Konto?", 
                login_link: "Einloggen", 
        
                //Footer
                FtrHome: "Startseite",                      
                FtrMembers: "Nur für Mitglieder",       
                FtrCheckout: "Zur Kasse",             
                FtrAbout: "Über uns",                 
                FtrContact: "Kontakt",             
                FtrPrivacyPolicy: "Datenschutz-Bestimmungen",   
                FtrTermsConditions: "Geschäftsbedingungen", 
                FtrIconAlt: "Social-Icon",            
                FtrLogoAlt: "Firmenlogo",   
        
                //Email Page
                verifyEmail: "Überprüfen Sie Ihre E-Mail-Adresse",
                verifyBtn: "Bestätigen und fortfahren"
            }
        }
        
          
          
    }
});

export default i18n;
