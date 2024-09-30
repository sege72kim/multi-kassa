import React from "react";
import "./styles.css";

const OpeningBlock = () => {
  return (
    <section className="opening_block">
      <div className="opening_block_info">
        <h1>
          Откройте свой криптообменный пункт <span>в Вашем городе!</span>
        </h1>
        <div className="opening_block_info_set">
          <img src={`/images/book1.jpg}`} alt="" />
          <a>
            Оставьте заявку и получите гайд{" "}
            <span>о видах мошенничества в обмене криптовалют</span>
          </a>
        </div>
        <div className="opening_block_info_calculate">
          <input type="text" placeholder="Введите телефон или Telegram" />

          <button>Рассчитать доходность</button>
        </div>
      </div>
      <div className="opening_block_picture">
        <div className="opening_block_animation">
          <div className="round" />
          <img src={`/images/tmp.png}`} alt="" />
        </div>
        <div className="opening_block_picture_info">
          <div className="blur" />
          <div className="timeline">
            <img src={`/icons/timeline.svg}`} alt="" />
            <div className="timeline_info">
              <div>
                <div className="timeline_checkbox">
                  <img src={`/icons/check.svg}`} alt="" />
                </div>
                <p>Полноценное обучение</p>
              </div>
              <div>
                <div className="timeline_checkbox">
                  <img src={`/icons/check.svg}`} alt="" />
                </div>
                <p className="middle_timeline">Доступ к мониторингам</p>
                <div className="monitoring">
                  <div>
                    <img
                      src={`/icons/monitoring1.svg
                      }`}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={`/icons/monitoring2.svg
                      }`}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={`/icons/monitoring3.svg
                      }`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="timeline_checkbox">
                  <img src={`/icons/check.svg}`} alt="" />
                </div>
                <p>Собственная CRM система</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningBlock;
