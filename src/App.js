import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';
import { jarallax } from 'jarallax';


import Header from './header';
import Footer from './footer';

import './assets/scss/app.scss';
import "./assets/scss/swiper_styles.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import newsIcon from "./assets/images/news_icon.png";

import jsonData from "./assets/JSON/infoData.json";

function App() {
  const [whatDevice,setWhatDevice]=useState(null);


  useEffect(() => {

  AOS.init();
    

    // 監聽視窗大小變化事件
    window.addEventListener('resize', function() {
        // 獲取當前瀏覽器寬度
        var browserWidth = window.innerWidth;
    
        // 檢查是否小於或等於 1024 像素
        if (browserWidth <= 1024) {
            setWhatDevice("mb");
        } else {
            setWhatDevice("pc");
        }
    });
    
    // 初始狀態下的瀏覽器寬度
    var initialWidth = window.innerWidth;
    if (initialWidth <= 1024) {
        setWhatDevice("mb");
    } else {
        setWhatDevice("pc");
    }

  }, []);

  useEffect(() => {
    jarallax(document.querySelectorAll('.jarallax'), {
      disableParallax: /iPad|iPhone|iPod|Android/,
      speed: 0.2
    });
  }, []);


  return (
    <div className="App">
      <Header />
      <main>
        <section id="vision">
          <Container fluid>
            <Row className="justify-content-center">
                <Col xs="12" sm="12" md="12" lg="12" className="position-relative">
                    <div data-relative-input="true" id="scene" className="page_vision_area">
                        <div className='main_title_text'></div>
                        <div className='vision_background jarallax'></div>
                    </div>
                </Col>
            </Row>
          </Container>
        </section>

        <section id="introduction">
          <Container fluid>
            <Row className="justify-content-center">
                <Col xs="12" sm="12" md="12" lg="12" className="position-relative">
                    <div className="page_introduction_area">
                        <div className='text_area' data-aos="fade-up" data-aos-duration="2000">
                          <p>台灣言論自由承載了社會多元與包容的價值，是民主社會的支柱之一。</p>
                          <p>這片土地上，言論的自由象徵著尊重與對話的權利，引領著思想的交流，激發更廣泛的討論與創新。</p>
                          <p>它超越種種界限，鼓舞人們敢於表達、探索，營造出充滿活力的社會。</p>
                          <p>這權利是我們共同捍衛的核心，也是自由民主的光輝象徵。</p>
                        </div>
                    </div>
                </Col>
            </Row>
          </Container>
        </section>

        <section id="article">
          <Container>
            <Row className="justify-content-center">
                <Col xs="12" sm="12" md="12" lg="12" className="position-relative">
                    <div className="page_article_area">
                        <div className="page_text_area">
                            <h2 className="page_title">文章報導</h2>
                        </div>
                        <div className='slider_area' data-aos="fade-up" data-aos-duration="2000">
                          <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                              clickable: true,
                            }}
                            breakpoints={{
                              '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                              },
                              '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                              },
                              '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                              },
                              '@1.50': {
                                slidesPerView: 3,
                                spaceBetween: 50,
                              },
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="swiper"
                          >
                            {
                               jsonData.slider.map((item,index)=>(
                                  <SwiperSlide key={index}>
                                    <a href={item.url} className='slider_box'>
                                        <div className='img_box'>
                                          <img className='slider_img' src={item.image} alt='slider_img' />
                                        </div>
                                        <div className='text_area'>
                                          <p>{item.title}</p>
                                        </div>
                                    </a>
                                  </SwiperSlide>
                              ))
                            }
                          </Swiper>
                        </div>
                    </div>
                </Col>
            </Row>
          </Container>
        </section>

        <section id="news">
          <Container fluid>
            <Row className="justify-content-center">
                <Col xs="12" sm="12" md="12" lg="12" className="position-relative">
                    <div className="page_news_area">
                        <div className="page_text_area">
                            <h2 className="page_title">延伸閱讀</h2>
                        </div>
                        <div className='news_area'>
                        {
                            jsonData.news.map((item,index)=>(
                              ((index+1) % 2 !== 0 || whatDevice==="mb") ?
                                <div key={index} className='news_box' data-aos="fade-up" data-aos-duration="2000">
                                  <a href={item.url} className='news_img_box'>
                                    <img src={item.image} alt='news_img'/>
                                  </a>
                                  <div className='news_text_area'>
                                    <div className='text_area'>
                                      <a href={item.url}>
                                        <p>{item.title}</p>
                                      </a>
                                      <a href={item.url}>
                                        <p>{item.description}</p>
                                      </a>
                                    </div>
                                    <div className='button_area'>
                                      <a href={item.url}>
                                        <img className='news_button_icon' src={newsIcon} alt='read_img'/>
                                        <p>閱讀文章</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                :
                                <div key={index} className='news_box' data-aos="fade-up" data-aos-duration="2000">
                                  <div className='news_text_area'>
                                    <div className='text_area'>
                                      <a href={item.url}>
                                        <p>{item.title}</p>
                                      </a>
                                      <a href={item.url}>
                                        <p>{item.description}</p>
                                      </a>
                                    </div>
                                    <div className='button_area'>
                                      <a href={item.url}>
                                        <img className='news_button_icon' src={newsIcon} alt='read_img'/>
                                        <p>閱讀文章</p>
                                      </a>
                                    </div>
                                  </div>
                                  <a href={item.url} className='news_img_box'>
                                    <img src={item.image} alt='news_img'/>
                                  </a>
                                </div>
                            ))
                          }
                        </div>
                    </div>
                </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
