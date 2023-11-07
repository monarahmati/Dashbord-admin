import { useTranslation } from "react-i18next";

const Footer = () => {
  //translation
  const { t } = useTranslation();

  
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <p className="mb-0">
              © 2023 -{"  "}
              <a href="index.html" className="text-muted">
                {t("classbon")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
