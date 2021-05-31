import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { VideoContainer, PreviewContainer } from './styles';

import { Pagination } from '../Pagination';
import { openModal, renderModal } from '@/modalActions';
import { openVideo } from '@/videosActions';
import { MODAL_VIDEO, MODAL_VIDEO_SEE } from '../Modal/allModalTypes';

export default function VideoList() {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.videos);

  return (
    <>
      <VideoContainer>
        {videos.map((video) => {
          return (
            <PreviewContainer key={video.id}>
              <div
                className="information-container"
                onClick={() => {
                  dispatch(openModal(MODAL_VIDEO));
                  dispatch(renderModal(MODAL_VIDEO_SEE));
                  dispatch(openVideo(video.id, videos));
                }}
              >
                <img alt="" src={video.thumbnail} />
                <h1>{video.title}</h1>
                <p>{video.user.username}</p>
              </div>
            </PreviewContainer>
          );
        })}
      </VideoContainer>
      <Pagination />
    </>
  );
}
