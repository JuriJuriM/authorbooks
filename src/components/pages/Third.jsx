import React from 'react'
import './Third.scss'
import Inbank from '../../assets/img/Inbank.jpg'
import Bankoboev from '../../assets/img/Bankoboev.jpg'
import Beach from '../../assets/img/Beach.jpg'
import Cardpay from '../../assets/img/Cardpay.jpg'
import Cardtopay from '../../assets/img/Cardtopay.jpg'
import Golden from '../../assets/img/Golden.jpg'
import Peoplethis from '../../assets/img/Peoplethis.jpg'
import Bankomat from '../../assets/img/Bankomat.jpg'

const Third = () => {
    return (
        <div className='third'>
            <div className="container">
                <div className="third__body">
                    <div className="third__title">Банкомат</div>
                    <div className="third__viev">
                        <img src={Inbank} alt="Inbank" />
                    </div>
                </div>
                <div className="third__row">
                    <div className="third__column">
                        <div className="third__item">
                            <div className="third__photo">
                                <img src={Bankoboev} alt="Bankoboev" />
                            </div>
                        </div>
                    </div>
                    <div className="third__column">
                        <div className="third__item">
                            <div className="third__text">Если порыться в мировой литературе, в том числе и специальной, то, без всякого сомнения, можно обнаружить тот факт, что про банки и банковскую систему написаны бесчисленные труды, включая экономические с их скрупулёзными расчётами, числовыми графиками и таблицами.</div>
                        </div>
                    </div>
                </div>
                <div className="third__row">
                    <div className="third__column">
                        <div className="third__item">
                            <div className="third__text">Известно, что без этих могучих финансовых учреждений ни один из нас не может представить себе жизнь в современном мире. А она, как известно, не стоит на месте, постоянно развивается и, даже можно сказать, закономерно эволюционирует.</div>
                        </div>
                    </div>
                    <div className="third__column">
                        <div className="third__item">
                            <div className="third__photo">
                                <img src={Beach} alt="Beach" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third__row">
                    <div className="third__column">
                        <div className="third__item">
                            <div className="third__photo">
                                <img src={Cardpay} alt="Cardpay" />
                            </div>
                        </div>
                    </div>
                    <div className="third__column">
                        <div className="third__item">
                            <div className="third__text">Вот и банковская система всё время совершенствуется, день ото дня предлагая своим многочисленным пользователям новые продукты и услуги. Одни банковские карты чего стоят, тем более что современному человеку без них никуда.</div>
                        </div>
                    </div>
                </div>
                <div className="third__row">
                    <div className="third__column">
                        <div className="third__item">
                            <div className="third__text">Все мы давно уже привыкли к безналичному расчёту, по достоинству оценив всю прелесть такового. Удобно ведь использовать для повседневных покупок не отсчитываемые у кассы денежные купюры, а небольшой пластиковый продукт с маленьким чипом.</div>
                        </div>
                    </div>
                    <div className="third__column">
                        <div className="third__item">
                            <div className="third__photo">
                                <img src={Cardtopay} alt="Cardtopay" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third__row">
                    <div className="third__column">
                        <div className="third__item">
                            <div className="third__photo">
                                <img src={Golden} alt="Golden" />
                            </div>
                        </div>
                    </div>
                    <div className="third__column">
                        <div className="third__item">
                            <div className="third__text">Одним словом, приложил этот пластик к устройству, и оплата произведена. Удобно. А если речь идёт о крупных покупках, то операций, равных безналичному расчёту, и вовсе нет.</div>
                        </div>
                    </div>
                </div>
                <div className="third__row">
                    <div className="third__column">
                        <div className="third__item">
                            <div className="third__text">История, поведанная автором, перенесёт читателей в самую гущу невероятных приключений, поможет ощутить себя настоящим очевидцем произошедших событий.</div>
                        </div>
                    </div>
                    <div className="third__column">
                        <div className="third__item">
                            <div className="third__photo">
                                <img src={Peoplethis} alt="Peoplethis" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third__subtitle">Теперь о главном!</div>
                <div className="third__rows">
                    <div className="third__columns-one">
                        <div className="third__items">
                            <div className="third__photos">
                                <img src={Bankomat} alt="Bankomat" />
                            </div>
                        </div>
                    </div>
                    <div className="third__columns-two">
                        <div className="third__items">
                            <div className="third__textall">
                                <div className="third__texts">Итак, просто нажмите кнопку, которая поможет выйти на сайт выбранной книги.</div>
                                <div className="third__button">
                                    <a href="https://ridero.ru/books/bankomat/" target='_blank' rel="noreferrer">Вам сюда</a>
                                </div>
                                <div className="third__texts">А потом, усевшись в мягкое кресло, с удовольствием прочитать книгу от начала и до конца.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third