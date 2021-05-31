import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { ImCloudDownload } from 'react-icons/im';

import { VideoContainer } from './styles';

import { downloadMaterial } from '@/videosActions';

export default function VideoSee() {
  const dispatch = useDispatch();
  const { video } = useSelector((state) => state.videos);

  return (
    <VideoContainer>
      <div id="video">
        <h1>{video.title}</h1>
        <div>
          <video width="320" height="240" controls>
            <source src={video.video} />
          </video>
        </div>
        <section>
          {video.description ? (
            <>
              <h2>Descrição</h2>
              <div id="description">
                <span>{video.description}</span>
              </div>
            </>
          ) : (
            ''
          )}
          {video.material.length !== 0 ? (
            <div id="material">
              <p>Material de Apoio</p>
              {video.material.map((material) => {
                return (
                  <motion.a
                    type="submit"
                    id="download"
                    whileHover={{ scale: 1.08 }}
                    onClick={() => dispatch(downloadMaterial(material.path))}
                  >
                    <div id="material-title">
                      <ImCloudDownload id="icon" />
                      <span>{material.name}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          ) : (
            ''
          )}
        </section>
      </div>
    </VideoContainer>
  );
}
