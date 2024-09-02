import React from 'react'
import './Sixth.scss'
import Warrior from '../../assets/img/Warrior.jpg'
import Warrioronhorse from '../../assets/img/Warrioronhorse.jpg'
import Warriorready from '../../assets/img/Warriorready.jpg'
import Warrioronbattle from '../../assets/img/Warriorinbattle.jpg'
import Warriorandgirl from '../../assets/img/Warrionandgirl.jpg'
import Dayof from '../../assets/img/Dayof.jpg'

const Sixth = () => {
    return (
        <div className="sixth">
            <div className="container">
                <div className="sixth__body">
                    <div className="sixth__title">День доспехов и т.д.</div>
                    <div className="sixth__viev">
                        <img src={Warrior} alt="Warrior" />
                    </div>
                    <div className="sixth__row">
                        <div className="sixth__column">
                            <div className="sixth__item">
                                <div className="sixth__photo">
                                    <img src={Warrioronhorse} alt="Warrioronhorse" />
                                </div>
                            </div>
                        </div>
                        <div className="sixth__column">
                            <div className="sixth__item">
                                <div className="sixth__text">Кто из нас, проходя службу в вооружённых силах, не заступал в наряд? Таких просто не найти. Более того, для кадровых военных заступление в наряд – это специфический ритуал, отшлифованный годами офицерской службы.</div>
                            </div>
                        </div>
                    </div>
                    <div className="sixth__row">
                        <div className="sixth__column">
                            <div className="sixth__item">
                                <div className="sixth__text">Здесь нет места случайностям, оплошностям и каким-либо нарушениям. Здесь все действия выверены пошагово и поминутно, потому что преследуют главную цель – обеспечение боеспособности всех подразделений и воинской части в целом.</div>
                            </div>
                        </div>
                        <div className="sixth__column">
                            <div className="sixth__item">
                                <div className="sixth__photo">
                                    <img src={Warriorready} alt="Warriorready" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sixth__row">
                        <div className="sixth__column">
                            <div className="sixth__item">
                                <div className="sixth__photo">
                                    <img src={Warrioronbattle} alt="Warrioronbattle" />
                                </div>
                            </div>
                        </div>
                        <div className="sixth__column">
                            <div className="sixth__item">
                                <div className="sixth__text">Герои данной книги служили в вооружённых силах огромной страны, и всем им есть, что вспомнить о том времени, когда они носили офицерскую форму, имели в распоряжении личное боевое оружие и руководили маленькими и большими воинскими коллективами.</div>
                            </div>
                        </div>
                    </div>
                    <div className="sixth__row">
                        <div className="sixth__column">
                            <div className="sixth__item">
                                <div className="sixth__text">И всё же, не взирая на колоссальную ответственность, строгий воинский распорядок, бесконечную череду армейских будней, все они оставались людьми, которым ничто человеческое не чуждо.</div>
                            </div>
                        </div>
                        <div className="sixth__column">
                            <div className="sixth__item">
                                <div className="sixth__photo">
                                    <img src={Warriorandgirl} alt="Warriorandgirl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sixth__subtitle">Здесь вы найдёте полное содержание предлагаемой автором истории</div>
                    <div className="sixth__rows">
                        <div className="sixth__columns-one">
                            <div className="sixth__items">
                                <div className="sixth__photos">
                                    <img src={Dayof} alt="Dayof" />
                                </div>
                            </div>
                        </div>
                        <div className="sixth__columns-two">
                            <div className="sixth__items">
                                <div className="sixth__textall">
                                    <div className="sixth__texts">Для этого пожалуйста воспользуйтесь кнопкой, расположенной непосредственно под данным текстом. Эта несложная операция переведёт вас на нужную страницу. И приятного прочтения!</div>
                                    <div className="sixth__button">
                                        <a href="https://ridero.ru/books/den_dospekhov_i_t_d/" target='_blank' rel="noreferrer">Вам сюда</a>
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

export default Sixth