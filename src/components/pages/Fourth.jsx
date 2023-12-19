import React from 'react'
import './Fourth.scss'
import Timesity from '../../assets/img/Timesity.jpg'
import Mantime from '../../assets/img/Mantime.jpg'
import Manintime from '../../assets/img/Manintime.jpg'
import Timebook from '../../assets/img/Timebook.jpg'
import Differenttime from '../../assets/img/Differenttime.jpg'
import Girltime from '../../assets/img/Girltime.jpg'
import BandS from '../../assets/img/BandS.jpg'

const Fourth = () => {
    return (
        <div className="fourth">
            <div className="container">
                <div className="fourth__body">
                    <div className="fourth__title">Б и С спешат на помощь</div>
                    <div className="fourth__viev">
                        <img src={Timesity} alt="Timesity" />
                    </div>
                    <div className="fourth__row">
                        <div className="fourth__column">
                            <div className="fourth__item">
                                <div className="fourth__photo">
                                    <img src={Mantime} alt="Mantime" />
                                </div>
                            </div>
                        </div>
                        <div className="fourth__column">
                            <div className="fourth__item">
                                <div className="fourth__text">Если вы готовы совершить фантастическое путешествие с двумя закадычными друзьями, то вам самое время с головой погрузиться в содержание этого романа.</div>
                            </div>
                        </div>
                    </div>
                    <div className="fourth__row">
                        <div className="fourth__column">
                            <div className="fourth__item">
                                <div className="fourth__text">Гарантировано: скучно не будет, тем более что действия происходят в разные временные промежутки. Как говорится, будет что вспомнить.</div>
                            </div>
                        </div>
                        <div className="fourth__column">
                            <div className="fourth__item">
                                <div className="fourth__photo">
                                    <img src={Manintime} alt="Manintime" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fourth__row">
                        <div className="fourth__column">
                            <div className="fourth__item">
                                <div className="fourth__photo">
                                    <img src={Timebook} alt="Timebook" />
                                </div>
                            </div>
                        </div>
                        <div className="fourth__column">
                            <div className="fourth__item">
                                <div className="fourth__text">А поможет совершить это путешествие самая настоящая машина времени – новейшее изобретение одного учёного мужа.</div>
                            </div>
                        </div>
                    </div>
                    <div className="fourth__row">
                        <div className="fourth__column">
                            <div className="fourth__item">
                                <div className="fourth__text">Кстати сказать, если бы не этот универсальный аппарат, если бы не сильнейшее желание двух парней помочь совершенно незнакомым людям, то всё могло бы сложиться иначе.</div>
                            </div>
                        </div>
                        <div className="fourth__column">
                            <div className="fourth__item">
                                <div className="fourth__photo">
                                    <img src={Differenttime} alt="Differenttime" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fourth__row">
                        <div className="fourth__column">
                            <div className="fourth__item">
                                <div className="fourth__photo">
                                    <img src={Girltime} alt="Girltime" />
                                </div>
                            </div>
                        </div>
                        <div className="fourth__column">
                            <div className="fourth__item">
                                <div className="fourth__text">Только это уже была бы другая история. И потому остаётся пожелать всем приятного прочтения.</div>
                            </div>
                        </div>
                    </div>
                    <div className="fourth__subtitle">Вот эта книга!</div>
                    <div className="fourth__rows">
                        <div className="fourth__columns-one">
                            <div className="fourth__items">
                                <div className="fourth__photos">
                                    <img src={BandS} alt="BandS" />
                                </div>
                            </div>
                        </div>
                        <div className="fourth__columns-two">
                            <div className="fourth__items">
                                <div className="fourth__textall">
                                    <div className="fourth__texts">А вам, друзья, для начала путешествия нужно нажать на кнопку и переместиться в магазин на страницу выбранной книги.</div>
                                    <div className="fourth__button">
                                        <a href="https://ridero.ru/books/b_i_s_speshat_na_pomosh/" target='_blank' rel="noreferrer">В магазин</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fourth