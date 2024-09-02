import React from 'react'
import './Fifth.scss'
import Alpy from '../../assets/img/Alpy.png'
import Suvorovone from '../../assets/img/Suvorovone.png'
import Battle from '../../assets/img/Battle.jpg'
import Suvorov from '../../assets/img/Suvorov.jpg'
import AboutSVU from '../../assets/img/AboutSVU.png'
import Svuone from '../../assets/img/Svuone.jpg'
import Svu from '../../assets/img/Svu.jpg'

const Fifth = () => {
    return (
        <div className="fifth">
            <div className="container">
                <div className="fifth__body">
                    <div className="fifth__title">Мы из СВУ</div>
                    <div className="fifth__viev">
                        <img src={Alpy} alt="Alpy" />
                    </div>
                    <div className="fifth__row">
                        <div className="fifth__column">
                            <div className="fifth__item">
                                <div className="fifth__photo">
                                    <img src={Suvorovone} alt="Suvorovone" />
                                </div>
                            </div>
                        </div>
                        <div className="fifth__column">
                            <div className="fifth__item">
                                <div className="fifth__text">Одним из знаменитых русских полководцев считается Александр Васильевич Суворов. Всю свою жизнь он посвятил воинской службе и принял участие во множестве военных походов.</div>
                            </div>
                        </div>
                    </div>
                    <div className="fifth__row">
                        <div className="fifth__column">
                            <div className="fifth__item">
                                <div className="fifth__text">Под руководством Суворова российские войска одержали целый ряд побед. К их числу относятся победы при Рымнике, при штурме Измаила, на реке Адда в Италии. Также с именем Суворова связан Швейцарский поход через Альпы.</div>
                            </div>
                        </div>
                        <div className="fifth__column">
                            <div className="fifth__item">
                                <div className="fifth__photo">
                                    <img src={Battle} alt="Battle" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fifth__row">
                        <div className="fifth__column">
                            <div className="fifth__item">
                                <div className="fifth__photo">
                                    <img src={Suvorov} alt="Suvorov" />
                                </div>
                            </div>
                        </div>
                        <div className="fifth__column">
                            <div className="fifth__item">
                                <div className="fifth__text">Это событие произошло в 1799 году, когда во главе союзной русско-австрийской армии стоял А.В. Суворов. Италия была освобождена от захватчиков. Именно тогда Суворов был возведён в княжеское достоинство, став князем Италийским.</div>
                            </div>
                        </div>
                    </div>
                    <div className="fifth__row">
                        <div className="fifth__column">
                            <div className="fifth__item">
                                <div className="fifth__text">А ещё Александр Васильевич Суворов был удостоен звания генералиссимуса. Суворов стал настоящим примером для многих поколений молодых людей, решивших связать свою жизнь со службой в армии.</div>
                            </div>
                        </div>
                        <div className="fifth__column">
                            <div className="fifth__item">
                                <div className="fifth__photo">
                                    <img src={AboutSVU} alt="AboutSVU" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fifth__row">
                        <div className="fifth__column">
                            <div className="fifth__item">
                                <div className="fifth__photo">
                                    <img src={Svuone} alt="Svuone" />
                                </div>
                            </div>
                        </div>
                        <div className="fifth__column">
                            <div className="fifth__item">
                                <div className="fifth__text">«Мы из СВУ» — роман, само название которого говорит само за себя. В книге просто и доходчиво рассказывается о людях, которые прошли эту школу. Книга будет интересна тем, кто учился в Суворовском военном училище, и тем, кто ещё только собирается её пройти.</div>
                            </div>
                        </div>
                    </div>
                    <div className="fifth__from">
                        <div className="fifth__video">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/R7-p9u28WHA?si=EZq-ppl9Zc5LVGPF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="fifth__subtitle">И, наконец, сама книга!</div>
                    <div className="fifth__rows">
                        <div className="fifth__columns-one">
                            <div className="fifth__items">
                                <div className="fifth__photos">
                                    <img src={Svu} alt="SVU" />
                                </div>
                            </div>
                        </div>
                        <div className="fifth__columns-two">
                            <div className="fifth__columns-items">
                                <div className="fifth__textall">
                                    <div className="fifth__texts">Эту книгу, конечно же, несложно найти. Нажав на кнопку, вы переместитесь на нужную страницу.</div>
                                    <div className="fifth__button">
                                        <a href="https://ridero.ru/books/my_iz_svu/" target='_blank' rel="noreferrer">Вам сюда</a>
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

export default Fifth