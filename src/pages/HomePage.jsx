import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const schemes = [
  {
    key: "fame2",
    link: "https://heavyindustries.gov.in/fame-ii"
  },
  {
    key: "retrofit",
    link: "https://morth.nic.in/"
  },
  {
    key: "statePolicy",
    link: "https://powermin.gov.in/en/content/electric-vehicle"
  },
  {
    key: "scrappage",
    link: "https://morth.nic.in/en/vehicle-scrapping-policy-overview"
  }
];

const initiatives = [
  {
    key: "fame2",
    image: "https://www.theindianiris.com/wp-content/uploads/2021/09/FAME-India-Scheme-1.jpg",
    link: "https://heavyindustries.gov.in/fame-ii"
  },
  {
    key: "scrappage",
    image: "https://images.91wheels.com/news/wp-content/uploads/2022/12/scrap1.jpg?width=360&&q=70",
    link: "https://morth.nic.in/en/vehicle-scrapping-policy-overview"
  },
  {
    key: "pli",
    image: "https://www.constructionworld.in/assets/uploads/a550a88688a1a741e4164581dff158fe.jpg",
    link: "https://mnre.gov.in/en/production-linked-incentive-pli/"
  },
  {
    key: "stateEV",
    image: "https://www.shutterstock.com/shutterstock/photos/612180866/display_1500/stock-vector-four-eco-friendly-busses-poster-of-a-green-electric-buses-with-plug-electric-eco-friendly-612180866.jpg",
    link: "https://powermin.gov.in/en/content/electric-vehicle"
  }
];

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <header className="header">
        <h2 className="site-name">EngineEx</h2>
        <div className="user-controls">
          <LanguageSwitcher />

          {isLoggedIn ? (
            <>
              <span className="profile">👤 Profile</span>
              <button className="btn" onClick={() => setIsLoggedIn(false)}>{t("signout")}</button>
            </>
          ) : (
            <>
              <button className="btn" onClick={() => setIsLoggedIn(true)}>{t("login")}</button>
              <button className="btn">{t("signup")}</button>
            </>
          )}
        </div>
      </header>

      <marquee className="marquee">
        {schemes.map((item, index) => (
          <span key={index} style={{ marginRight: "2rem" }}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {t(item.key)}
            </a>
          </span>
        ))}
      </marquee>

      <main className="main-content">
        <section className="feature-section">
          <h3>{t("whyUpgrade")}</h3>
          <p>{t("whyUpgradeDesc")}</p>
        </section>

        <section className="feature-section">
          <h3>{t("howItHelps")}</h3>
          <p>{t("howItHelpsDesc")}</p>
        </section>

        <h3>{t("initiatives")}</h3>
        <div className="card-grid">
          {initiatives.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={t(item.key + "Title")} />
              <h4>{t(item.key + "Title")}</h4>
              <p>{t(item.key + "Desc")}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">{t("knowMore")}</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;