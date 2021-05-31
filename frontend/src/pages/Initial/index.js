import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from './homeImgs/logo.png';
import slogan1 from './homeImgs/slogan1.gif';
import slogan2 from './homeImgs/slogan2.gif';
import sideImg from './homeImgs/sideImg.gif';
import offer from './resources/offer.png';
import correct from './resources/correct.png';
import background from './resources/background.png';
import test from './resources/test.png';
import arrow from './resources/arrow.png';

import teacher from './resources/teacher.png';
import plataform from './resources/plataform.png';
import easy from './resources/easy.png';

import signupStudent from './resources/signupStudent.png';
import signupTeacher from './resources/signupTeacher.png';

import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

import { Nav, Content, Slogan, Footer } from './styles';

export default function Home() {
  const [slogan, setSlogan] = useState('');
  const responsive = window.innerWidth;

  useEffect(() => {
    setSlogan(slogan1);
  }, []);

  setInterval(() => {
    setSlogan(slogan2);
  }, 7200);

  return (
    <>
      <Nav>
        <Link to="/" id="logo">
          <img src={logo} />
        </Link>
        <Link to="/login">
          <div id="div-button">
            <button>Entrar</button>
          </div>
        </Link>
      </Nav>
      <Slogan>
        <div id="first-content">
          <img
            id="slogan"
            src={slogan}
            width="830"
            alt="Slogan - A plataforma de estudos que não te deixa para trás"
          />
          {responsive <= 375 ? (
            ''
          ) : (
            <img
              className="sideImg"
              src={sideImg}
              width="1020"
              alt="Imagem Lateral"
            />
          )}
        </div>
      </Slogan>
      <Content>
        <div id="background" />
        <h1>Por que utilizar o Fastudy?</h1>
        <section id="second-content">
          <div className="objective">
            <img src={teacher} alt="" width="300" className="img-objective" />
            <h2>Os professores são escolhidos rigorosamente</h2>
            <p>
              Temos professores especializados e concursados que dominam o
              ensino online e métodos poderosos e eficientes para auxiliar no
              caminho de todos os estudantes ao seus objetivos escolares.
            </p>
          </div>
          <div className="objective">
            <img src={plataform} alt="" width="300" className="img-objective" />
            <h2>A plataforma é fácil de utilizar</h2>
            <p>
              O Fastudy é acessível a todos de forma que qualquer estudante
              consiga usar a plataforma tranquilamente.
            </p>
          </div>
          <div className="objective">
            <img src={easy} alt="" width="300" className="img-objective" />
            <h2>O ensino é diversificado</h2>
            <p>
              Temos um amplo repositório de conteúdos escolares lecionados de
              diversas formas, didáticas e adaptadas ao seu tempo apresentando
              os assuntos de forma resumida ou aprofundada.
            </p>
          </div>
        </section>
        <section id="third-content">
          <div id="offer">
            <img src={arrow} className="arrow" alt="Flecha" />
            <h1>O que o Fastudy tem a oferecer?</h1>
            <p>
              Buscamos <b>centralizar</b> as informações de ensino, oferencendo
              um grande repertório de <b>vídeos</b> ministrados por professores{' '}
              <b>especializados</b>, <b>conteúdos</b> escritos e{' '}
              <b> resumidos</b> e diversas <b>lições</b> com questões dos demais{' '}
              <b>vestibulares</b> que são organizadas pelos professores e
              apresentadas em <b>diferentes</b> níveis de dificuldade<b>.</b>
            </p>
          </div>
          {responsive <= 375 ? '' : <img src={offer} alt="" width="1100" />}
        </section>
        <section id="correct-container">
          <div id="correct">
            {responsive <= 375 ? '' : <img src={correct} alt="" width="900" />}
            <div id="p-correct">
              <h1>Corrigimos sua redação!</h1>
              <p>
                A cada <b>semana</b> nós disponibilizamos um <b>tema</b> de
                redação e os textos de apoio. Então, você <b>faz</b> sua redação
                e nos <b>entrega</b> pela plataforma e em <b>alguns</b> dias
                será retornada a você <b>corrigida</b> pelos nossos professores.
                Seguimos os mesmos <b>critérios de avaliação</b> utilizados nos
                principais <b>vestibulares</b> do Brasil<b>.</b>
              </p>
            </div>
          </div>
        </section>
        <h1 id="h1-researcher">
          Realizamos algumas pesquisas que nos mostram que...
        </h1>
        <section id="researches">
          <div className="researcher-card">
            <div className="break">
              <img src={background} width="950" alt="" />
              <h2>84,2%</h2>
              <h3>dos estudantes</h3>
            </div>
            <p>
              tem interesse no <b>ensino superior</b>.
            </p>
          </div>
          <div className="researcher-card">
            <div className="break">
              <img src={background} width="950" alt="" />
              <h2>94,7%</h2>
              <h3>dos estudantes</h3>
            </div>
            <p>
              tem interesse em prestar algum <b>vestibular</b>.
            </p>
          </div>
          <div className="researcher-card">
            <div className="break">
              <img src={background} width="950" alt="" />
              <h2>86,8%</h2>
              <h3>
                dos <br></br>estudantes
              </h3>
            </div>
            <p>
              tem como principal forma de acesso à informação a <b>internet</b>.
            </p>
          </div>
        </section>
        <section id="final-message">
          <div>
            <h1>Portanto, se junte a nós hoje mesmo!</h1>
            <p>
              Você que deseja prestar algum vestibular se junte a nós agora
              mesmo e usufrua de diversos conteúdos que irão te preparar ao
              vestibular e ao sucesso acadêmico.
            </p>
          </div>
          <div>
            {responsive <= 375 ? '' : <img src={test} alt="" width="900" />}
          </div>
        </section>
        <section id="signup">
          <Link to="/signup" className="btn-container">
            <img src={signupStudent} alt="" className="img-signup" />
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button>Aluno</button>
            </motion.div>
          </Link>
          <div className="btn-container">
            <img src={signupTeacher} alt="" className="img-signup" />
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button>Professor</button>
            </motion.div>
          </div>
        </section>
        <Footer>
          <div id="icon-container">
            <h2>Contato</h2>
            <div id="software">
              CLIQUE AQUI E FAÇA O DOWNLOAD DO SOFTWARE
              <p id="fast">FASTUDY!</p>
            </div>
            <div id="icons">
              <a
                href="https://www.facebook.com/Fastudy-105517377579009"
                target="_blank"
              >
                <FaFacebookF className="social-icon" />
              </a>
              <a href="https://www.instagram.com/fastudy.tcc/" target="_blank">
                <FaInstagram className="social-icon" />
              </a>
              <a>
                <FiGithub className="social-icon" />
              </a>
            </div>
          </div>
        </Footer>
      </Content>
    </>
  );
}
