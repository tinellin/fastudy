import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaCalculator, FaReact } from 'react-icons/fa';
import { TiSortAlphabetically } from 'react-icons/ti';

import { Container, NavItens, Item } from './styles';
import {
  GiColiseum,
  GiEarthAmerica,
  GiFizzingFlask,
  GiButterfly,
  GiThink,
  GiThreeFriends,
  GiHamburgerMenu,
} from 'react-icons/gi';
import { AiOutlineFileText } from 'react-icons/ai';

import {
  selectSubject,
  render,
  clickSubject,
  expandSideBar,
  closeSideBar,
} from '@/mainActions';
import { openModal, renderModal } from '@/modalActions';
import { getAllVideos } from '@/videosActions';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { subjectId, page, sideBar, expanded, j, k } = useSelector(
    (state) => state.main
  );
  const responsive = window.innerWidth;
  let initial;
  let animate;

  let selected = {
    borderLeft: '7px solid white',
  };

  if (responsive <= 375) {
    initial = { scale: 0, opacity: 0 };
    animate = { scale: 1, opacity: 1 };
  }

  function Subjects(props) {
    return (
      <Item
        onClick={() => {
          dispatch(clickSubject());
          dispatch(selectSubject(props.value, props.name));
          dispatch(render('VIDEO'));
          dispatch(getAllVideos(props.value, page, '', j, k));
        }}
        style={props.value === subjectId ? selected : null}
        marginTop={sideBar.marginTop}
        marginLeft={sideBar.marginLeft}
      >
        <div id="icon">
          <>{props.icon}</>
          <motion.span
            id={props.id}
            style={responsive <= 375 ? sideBar.display : ''}
            initial={initial}
            animate={animate}
          >
            {props.name}
          </motion.span>
        </div>
      </Item>
    );
  }

  return (
    <Container width={sideBar.width}>
      {responsive <= 375 ? (
        <div
          id="toggle"
          onClick={() => {
            expanded ? dispatch(closeSideBar()) : dispatch(expandSideBar());
          }}
        >
          <GiHamburgerMenu />
        </div>
      ) : (
        ''
      )}
      <nav>
        {responsive <= 375 ? '' : <h1>Matérias</h1>}
        <NavItens>
          <Subjects
            name="Matemática"
            value={1}
            icon={<FaCalculator className="icon" />}
          />
          <Subjects
            name="Física"
            value={2}
            icon={<FaReact className="icon" />}
          />
          <Subjects
            name="Química"
            value={3}
            icon={<GiFizzingFlask className="icon" />}
          />
          <Subjects
            name="Biologia"
            value={4}
            icon={<GiButterfly className="icon" />}
          />
          <Subjects
            name="História"
            value={5}
            icon={<GiColiseum className="icon" />}
          />
          <Subjects
            name="Português"
            value={6}
            icon={<TiSortAlphabetically className="icon" />}
          />
          <Subjects
            name="Geografia"
            value={7}
            icon={<GiEarthAmerica className="icon" />}
          />
          <Subjects
            name="Filosofia"
            value={8}
            icon={<GiThink className="icon" />}
          />
          <Subjects
            name="Sociologia"
            value={9}
            icon={<GiThreeFriends className="icon" />}
          />
          <Subjects
            name="Redação"
            value={10}
            icon={<AiOutlineFileText className="icon" />}
          />
        </NavItens>
      </nav>
    </Container>
  );
}
