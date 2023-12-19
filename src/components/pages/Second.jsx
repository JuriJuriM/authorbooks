import React from 'react'
import './Second.scss'
import Vasilokin from '../../assets/img/Vasilokin.jpg'
import Love from '../../assets/img/Love.jpg'
import Mother from '../../assets/img/mother.jpg'
import Umbrella from '../../assets/img/Umbrella.jpg'
import Animetwo from '../../assets/img/Animetwo.jpg'
import Vasilok from '../../assets/img/Vasilok.jpg'

const Second = () => {
    return (
        <div className="second">
            <div className="container">
                <div className="second__body">
                    <div className="second__title">Василёк</div>
                    <div className="second__viev">
                        <img src={Vasilokin} alt="Vasilok" />
                    </div>
                    <div className="second__row">
                        <div className="second__column">
                            <div className="item">
                                <div className="second__photo">
                                    <img src={Love} alt="Love" />
                                </div>
                            </div>
                        </div>
                        <div className="second__column">
                            <div className="item">
                                <div className="second__text">Есть женщины, которые по-настоящему любят, отдавая себя всецело этому чувству. Такие женщины во все времена были прекрасными жёнами и замечательными матерями.</div>
                            </div>
                        </div>
                    </div>
                    <div className="second__row">
                        <div className="second__column">
                            <div className="second__item">
                                <div className="second__text">Они бережно хранят свой семейный очаг и делают всё от них зависящее, чтобы в их домах было тепло и уютно, чтобы в них царили любовь, мир и порядок.</div>
                            </div>
                        </div>
                        <div className="second__column">
                            <div className="item">
                                <div className="second__photo">
                                    <img src={Mother} alt="Mother" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second__row">
                        <div className="second__column">
                            <div className="item">
                                <div className="second__photo">
                                    <img src={Umbrella} alt="Umbrella" />
                                </div>
                            </div>
                        </div>
                        <div className="second__column">
                            <div className="item">
                                <div className="second__text">И как же порой бывает обидно и горько, когда посторонние неведомые обстоятельства нарушают слаженную идиллию, внося в спокойную размеренную жизнь сумятицу и хаос, в одночасье расшатывая и ломая прочные стены семейного очага…</div>
                            </div>
                        </div>
                    </div>
                    <div className="second__subtitle">Такую историю и поведал нам автор в книге с названием «Василёк».</div>
                    <div className="second__row">
                        <div className="second__column">
                            <div className="second__item">
                                <div className="second__texttwo">Примечание: Василёк – это не цветок. Так зовут одного из героев произведения.</div>
                            </div>
                        </div>
                        <div className="second__column">
                            <div className="item">
                                <div className="second__photo">
                                    <img src={Animetwo} alt="Anime" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second__rows">
                        <div className="second__columns-one">
                            <div className="second__items">
                                <div className="second__photos">
                                    <img src={Vasilok} alt="Vasilok" />
                                </div>
                            </div>
                        </div>
                        <div className="second__columns-two">
                            <div className="second__items">
                                <div className="second__textall">
                                    <div className="second__texts">А прочитать эту историю целиком вы сможете, приобретя книгу.</div>
                                    <div className="second__texts">Для этого просто нажмите на кнопку, которая поможет выйти на нужную страницу.</div>
                                </div>
                                <div className="second__button">
                                    <a href="https://ridero.ru/books/vasilyok/" target='_blank' rel="noreferrer">В магазин</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second__subtitle">Всем спасибо за внимание, а ещё хочется пожелать приятного прочтения этой необычной и удивительной истории.</div>
                </div>
            </div>
        </div>
    )
}

export default Second