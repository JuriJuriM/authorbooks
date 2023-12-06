import React from 'react'
import './Main.scss'
//import Girl from '../../assets/img/Girl.jpg'
//import Girl from './Girl.jpg'
import Girl from './img/Girl.jpg'
import Girlfind from '../../assets/img/Girlfind.jpg'
import Girlread from '../../assets/img/Girlread.jpg'
import Penmen from '../../assets/img/Penmen.jpg'
import Openedbook from '../../assets/img/Openedbook.jpg'
import Khroniki from '../../assets/img/Khroniki.jpg'
import Bankomat from '../../assets/img/Bankomat.jpg'
import Vasilok from '../../assets/img/Vasilok.jpg'
import BandS from '../../assets/img/BandS.jpg'
import Svu from '../../assets/img/Svu.jpg'
import Dayof from '../../assets/img/Dayof.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className="container">
                <div className="main__body">
                    <div className="main__title">Главная страница</div>
                    <div className="main__girl">
                        <img src={Girl} alt="Girl" />
                    </div>
                    <div className="main__subtitle">Коротко об основной идее</div>
                    <div className="main__row">
                        <div className="main__column">
                            <div className="main__item">
                                <div className="main__photo">
                                    <img src={Girlfind} alt="Girlfind" />
                                </div>
                            </div>
                        </div>
                        <div className="main__column">
                            <div className="main__item">
                                <div className="main__text">Данный сайт создан автором без чьей-либо помощи и поддержки, но от всей души и с самыми наилучшими пожеланиями в адрес уважаемых визитёров. Очень хочется, чтобы, оказавшись на его страницах, каждый из вас почувствовал непреодолимое желание познакомиться, хотя бы бегло, с их содержанием, а затем с интересом окунулся бы в мир приглянувшихся вам художественных произведений, созданных с одной-единственной целью – быть полезными каждому читателю.</div>
                            </div>
                        </div>
                    </div>
                    <div className="main__row">
                        <div className="main__column">
                            <div className="main__item">
                                <div className="main__text">Чтение не может быть скучным, тем более если в своих руках вы держите нужную книгу. Чтение не должно быть скучным, если выбранное произведение написано с юмором, а его сюжет тесно переплетается с вашей жизнью, с тем её отрезком, с которым знакомы и вы не понаслышке.</div>
                                <div className="main__text">Чтение открывает дверь в сказочный мир множества переживаний, бурь страстей и вихрей эмоций, некогда переполнявших, а быть может, и сейчас переполняющих ваш разум.</div>
                            </div>
                        </div>
                        <div className="main__column">
                            <div className="main__item">
                                <div className="main__photo">
                                    <img src={Girlread} alt="Girlread" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main__row">
                        <div className="main__column">
                            <div className="main__item">
                                <div className="main__photo">
                                    <img src={Penmen} alt="Penmen" />
                                </div>
                            </div>
                        </div>
                        <div className="main__column">
                            <div className="main__item">
                                <div className="main__text">Чтение, как спасательный круг, выручает в те моменты, когда, казалось бы, всё против вас, и больше нет сил, чтобы бороться с напастью и преодолевать преграды, выстроенные на пути чьей-то недоброй рукой.</div>
                                <div className="main__text">Однако стоить открыть книгу и начать читать, как забываешь обо всём. Уходят в сторону коварные переживания, рассеиваются желчные домыслы и горькие страхи, и вы страница за страницей погружаетесь в удивительный мир произведения, с интересом наблюдая за разворачивающимися событиями.</div>
                            </div>
                        </div>
                    </div>
                    <div className="main__row">
                        <div className="main__column">
                            <div className="main__item">
                                <div className="main__text">Так происходит всегда, и остаётся пожелать всем вам приятного путешествия!</div>
                                <div className="main__text">Мои книги терпеливо ждут своего читателя, а познакомиться с ними можно, не спеша переходя на каждую последующую страницу гостеприимного сайта.</div>
                            </div>
                        </div>
                        <div className="main__column">
                            <div className="main__item">
                                <div className="main__photo">
                                    <img src={Openedbook} alt="Openedbook" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main__from">
                        <div className="main__video">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hKcZ1EjdXes?si=m8XLK3SaN5tHPZkj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="main__offer">А теперь несколько подробнее о том, какие книги предлагает автор.</div>
                    <div className="main__rows">
                        <div className="main__columns">
                            <div className="main__items">
                                <div className="main__photos">
                                    <img src={Khroniki} alt="Khroniki" />
                                </div>
                                <div className="main__text">«Хроники нестроевой подготовки» - книга о курсантах ЛВВПУ ПВО, о курсантской юности, написанная с хорошим юмором. Книга будет интересна всем, тем более что вместе с увлекательным сюжетом читатель к своему удовольствию столкнётся с такими знакомыми персонажами. А впрочем, у каждого из нас хранятся в памяти похожие истории, которые мы с удовольствием рассказываем своим друзьям.</div>
                            </div>
                        </div>
                        <div className="main__columns">
                            <div className="main__items">
                                <div className="main__photos">
                                    <img src={Vasilok} alt="Vasilok" />
                                </div>
                                <div className="main__text">«Василёк» - книга, сюжет которой основан на реальных событиях с добавлением доли мистики и с неожиданной развязкой. Почему-то иногда получается всё по-другому, не так, как планируешь заранее. Несмотря на это, даже в сложной ситуации самое главное – не растеряться, отбросить в сторону переполняющие душу эмоции и всеми силами постараться найти выход даже из самого запутанного лабиринта событий.</div>
                            </div>
                        </div>
                        <div className="main__columns">
                            <div className="main__items">
                                <div className="main__photos">
                                    <img src={Bankomat} alt="Bankomat" />
                                </div>
                                <div className="main__text">«Банкомат» - книга об авантюрных приключениях в современном мире, о чести, о совести и о человеческом достоинстве. Ведь как же порой хочется взлететь над повседневной суетой, вспомнить, наконец, о достоинстве и чести, благородстве и смелости и, отбросив все сомнения и поборов все страхи, решиться на поступок, как это сделал главный герой произведения. Конечно же, для этого надо многое знать и уметь…</div>
                            </div>
                        </div>
                    </div>
                    <div className="main__rows">
                        <div className="main__columns">
                            <div className="main__items">
                                <div className="main__photos">
                                    <img src={BandS} alt="BandS" />
                                </div>
                                <div className="main__text">«Б и С спешат на помощь» - книга о приключениях двух закадычных друзей, о том, что в этом мире можно всё исправить, если только очень захотеть. Главное - взяться за благородное дело, засучив рукава. Вот за такое исправление и взялись герои данного романа, волей судьбы оказавшиеся в самом эпицентре захватывающих событий. Никто из них и предположить не мог, что ему придётся проделать такой долгий путь, полный тайн, крутых поворотов и неожиданных развязок.</div>
                            </div>
                        </div>
                        <div className="main__columns">
                            <div className="main__items">
                                <div className="main__photos">
                                    <img src={Svu} alt="SVU" />
                                </div>
                                <div className="main__text">«Мы из СВУ» - книга, название которой говорит само за себя. В ней просто и доходчиво рассказывается о людях, которые прошли эту школу. Книга будет интересна тем, кто в разные годы учился в Суворовском военном училище, и тем ребятам, кто ещё только собирается эту школу пройти. Эта книга о воспитанниках Суворовского военного училища, о закалке тела и духа мальчишек, ещё вчера сидевших за школьной партой, о становлении и воспитании характеров будущих профессиональных воинов.</div>
                            </div>
                        </div>
                        <div className="main__columns">
                            <div className="main__items">
                                <div className="main__photos">
                                    <img src={Dayof} alt="Dayof" />
                                </div>
                                <div className="main__text">«День доспехов и т.д.» - герои данной книги служили в Вооружённых Силах огромной страны, и всем им есть что вспомнить о том времени, когда они носили офицерскую форму, имели в распоряжении личное боевое оружие и руководили маленькими и большими воинскими коллективами. И всё же, не взирая на колоссальную ответственность, строгий воинский распорядок, бесконечную череду армейских будней, все они оставались людьми, которым ничто человеческое не чуждо.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main