import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const NewsLetter = () => {
  const { t } = useTranslation();
  return (
    <div className="container  my-12">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        viewport={{ once: true }}
        className="bg-primary min-h-[350px] rounded-2xl flex flex-col justify-center items-center space-y-10 px-10"
      >
        <h3 className="heading-3 text-white capitalize">
          {t('newsLetterh3')}
        </h3>
        <p>
         {t('newsLetterPara')}{" "}
        </p>
        <form
          action=""
          className="flex flex-col md:flex-row justify-center items-center w-full px-32 gap-5"
        >
          <input
            type="email"
            placeholder={t("EmailPlaceholder")}
            className="placeholder-white w-full min-w-[300px] md:max-w-[340px] px-4 bg-[#ffffff79] py-3 rounded-2xl outline-none text-white font-semibold focus:outline-2 focus:outline-white"
          />
          <button className="bg-white btn-hover text-primary font-semibold px-6 py-3 rounded-xl">
            {t("submit")}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default NewsLetter;
