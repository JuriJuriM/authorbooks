import React from 'react'
import './First.scss'
import Firstbook from '../../assets/img/Firstbook.jpg'
import Fathers from '../../assets/img/Fathers.jpg'
import Fatherstwo from '../../assets/img/Fatherstwo.jpg'
import School from '../../assets/img/School.jpg'
import Schooltwo from '../../assets/img/Schooltwo.jpg'
import Years from '../../assets/img/Years.JPG'
import Yearstwo from '../../assets/img/Yearstwo.JPG'
import Khroniki from '../../assets/img/Khroniki.jpg'

const First = () => {
    return (
        <div className="first">
            <div className="container">
                <div className="first__body">
                    <div className="first__title">Хроники нестроевой подготовки</div>
                    <div className="first__viev">
                        <img src={Firstbook} alt="Book" />
                    </div>
                    <div className="first__subtitle">Эпиграф</div>
                    <div className="first__row">
                        <div className="first__column">
                            <div className="first__item">
                                <div className="first__photo">
                                    <img src={Fathers} alt="Fathers" />
                                </div>
                            </div>
                        </div>
                        <div className="first__column">
                            <div className="first__item">
                                <div className="first__text">Книга бережных воспоминаний о прекрасной поре юности и взросления, о верных друзьях и незабываемых приключениях, от которых захватывает дух даже по прошествии многих лет. Спасибо нашим преподавателям и самым лучшим на свете отцам-командирам.</div>
                            </div>
                        </div>
                        <div className="first__column">
                            <div className="first__item">
                                <div className="first__photo">
                                    <img src={Fatherstwo} alt="Fatherstwo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="first__row">
                        <div className="first__column">
                            <div className="first__item">
                                <div className="first__photo">
                                    <img src={School} alt="School" />
                                </div>
                            </div>
                        </div>
                        <div className="first__column">
                            <div className="first__item">
                                <div className="first__text">Любой из нас, не задумываясь и нисколько не сомневаясь в правильности своего ответа, утвердительно скажет, что самыми запоминающимися, самыми светлыми, самыми дорогими и чудесными годами были, конечно же, курсантские, самым лучшим городом на земле, без сомнения, был город Ленинград, а самым лучшим учебным заведением было и навсегда останется ЛВВПУ ПВО, наше Ленинградское высшее военно-политическое училище противовоздушной обороны.</div>
                            </div>
                        </div>
                        <div className="first__column">
                            <div className="first__item">
                                <div className="first__photo">
                                    <img src={Schooltwo} alt="Schooltwo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="first__row">
                        <div className="first__column">
                            <div className="first__item">
                                <div className="first__photo">
                                    <img src={Years} alt="Years" />
                                </div>
                            </div>
                        </div>
                        <div className="first__column">
                            <div className="first__item">
                                <div className="first__text">И пускай все давно сменили курсантскую форму на офицерскую, а потом и её спрятали в шкаф, облачившись в другую одежду, мы будем помнить тех, с кем плечом к плечу прошли четыре незабываемых года до первого офицерского звания и золотых звёзд на погонах.</div>
                            </div>
                        </div>
                        <div className="first__column">
                            <div className="first__item">
                                <div className="first__photo">
                                    <img src={Yearstwo} alt="Yearstwo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="first__from">
                        <div className="first__video">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/a6NFzSNT0vA?si=uwqD1S42_Nuh50iN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="first__subtitle">Если решили заказать эту книгу, то:</div>
                    <div className="first__rows">
                        <div className="first__columns-one">
                            <div className="first__items">
                                <div className="first__photos">
                                    <img src={Khroniki} alt="Khroniki" />
                                </div>
                            </div>
                        </div>
                        <div className="first__columns-two">
                            <div className="first__items">
                                <div className="first__textall">
                                    <div className="first__texts">Для заказа книги "Хроники нестроевой подготовки" пожалуйста воспользуйтесь кнопкой, расположенной под данным текстом.</div>
                                    <div className="first__texts">Эта несложная операция переведёт вас на нужную страницу.</div>
                                </div>
                                <div className="first__button">
                                    <a href="https://ridero.ru/books/khroniki_nestroevoi_podgotovki/" className='first__btn' target='_blank' rel="noreferrer">В магазин</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="first__end">И ещё два видео:</div>
                    <div className="first__thema">О самой книге и о том, как её заказать, пройдя по ссылке при нажатии на кнопку</div>
                    <div className="first__videos">
                        <div className="first__fromtwo">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/325jxAMK1jo?si=nFWkVy9kcH5g7A7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="first__fromtwo">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sSzQ6-wFiHA?si=UL4TgrfWoTBcVwql" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default First