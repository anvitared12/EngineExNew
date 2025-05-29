import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const WelcomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="welcome-container">
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <LanguageSwitcher />
      </div>

      <h1 className="title">{t("welcome")}</h1>
      <p className="subtitle">{t("subtitle")}</p>
      <div className="button-group">
        <button onClick={() => navigate("/home")} className="btn">{t("explore")}</button>
      </div>
    </div>
  );
};

export default WelcomePage;
