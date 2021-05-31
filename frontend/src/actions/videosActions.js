import React from 'react';
import { SupportMaterial } from '../pages/Main/Modal/VideoModal/VideoSend/';
import { createFile } from '../templates/Preview';

import api from '../services/api';

import { updateCounter, throwError, renderModal } from '@/modalActions';
import { FORM_HEADER, MODAL_THANKED } from '../pages/Main/Modal/allModalTypes';
import { definePages, defineCurrentPage, sendPagination } from '@/mainActions';

export const addSupportMaterial = (material, counter) => {
  counter++;
  return (dispatch) => {
    if (counter < 5) {
      material[counter] = {
        component: <SupportMaterial counter={counter} key={counter} />,
        file: '',
        type: '',
        style: '',
      };
      dispatch(updateCounter(counter));
      dispatch({ type: 'SUPPORT_MATERIAL_ADDED', payload: material });
    } else {
      dispatch({ type: 'SUPPORT_MATERIAL_ERROR' });
    }
  };
};

export const removeSupportMaterial = (material, counter) => {
  if (counter >= 0) {
    counter--;
    material.pop();
  }

  return (dispatch) => {
    dispatch(updateCounter(counter));
    dispatch({ type: 'SUPPORT_MATERIAL_REMOVED', payload: material });
  };
};

export const changeSubject = (e) => {
  return { type: 'SUBJECT_CHANGED', payload: e.target.value };
};

export const changeTitle = (e) => {
  return { type: 'TITLE_CHANGED', payload: e.target.value };
};

export const changeDescription = (e) => {
  return { type: 'DESCRIPTION_CHANGED', payload: e.target.value };
};

export const changeThumbnail = (e) => {
  let thumbnail = e.target.files[0];
  const file = createFile(thumbnail);
  return { type: 'THUMBNAIL_CHANGED', payload: file };
};

export const changeSupportMaterial = (e, material, counter) => {
  let file = createFile(e.target.files[0]);
  let style = {
    type: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    upload: { width: 'max-content' },
  };

  return (dispatch) => {
    material[counter].file = file;
    material[counter].style = style;

    dispatch({
      type: 'SUPPORT_MATERIAL_CHANGED',
      payload: material,
    });
  };
};

export const changeMaterialName = (e, material, counter) => {
  material[counter].file.editedName = e.target.value;
  return { type: 'MATERIAL_NAME_CHANGED', payload: material };
};

export const changeVideo = (e) => {
  let video = e.target.files[0];
  const file = createFile(video);
  return { type: 'VIDEO_CHANGED', payload: file };
};

export const uploadVideo = (upload, user) => {
  let { subject, thumbnail, title, description, material, video } = upload;

  let verified = material.every((item) =>
    item.file || item.component === '' ? true : false
  );

  return (dispatch) => {
    if (subject > 0 && title !== '' && verified && video !== '') {
      const data = new FormData();

      if (material.length >= 1) {
        material.map((item) => {
          data.append('materials', item.file.file, item.file.name);
        });
      }

      data.append('uploads', video.file, video.file.name);
      data.append('thumbnails', thumbnail.file);

      const content = {
        subject,
        title,
        thumbnail: thumbnail.name,
        description,
        material: material.map(({ file }) => {
          let material = {
            name: file.name,
            editedName: file.editedName ? file.editedName : '',
          };

          return material;
        }),
        video: video.name,
        user,
      };

      //Realiza a conversão p/ string, p/ enviar como Form-Data, criando um blob.
      const json = JSON.stringify(content);
      const blob = new Blob([json], { type: 'application/json' });
      data.append('tmp', blob);

      api
        .post('/video/upload', data, { FORM_HEADER })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      dispatch({ type: 'VIDEO_UPLOADED' });
      dispatch(renderModal(MODAL_THANKED));
    } else {
      dispatch(throwError('Preencha todos os campos corretamente!', 'warn'));
    }
  };
};

export const getAllVideos = (subjectId, page, search, j, k) => {
  return (dispatch) => {
    if (page !== 0) {
      const qty = sendPagination();
      api
        .post('/video/getAll', { subjectId, page, qty, search })
        .then((res) => {
          const { videos, pages } = res.data;
          console.log(videos);
          if (page <= pages) {
            dispatch(defineCurrentPage(page, pages));
            dispatch(
              definePages(page, pages, 'VIDEO', subjectId, j, k, search)
            );
            dispatch({ type: 'VIDEOS_GOTTEN', payload: videos });
          }
        });
    }
  };
};

export const openVideo = (id, videos) => {
  const video = videos.find((video) => video.id === id);
  return { type: 'VIDEO_OPENED', payload: video };
};

//Pegar arquivos do material de apoio
export const downloadMaterial = (material) => {
  return (dispatch) => {
    api.get(material, { responseType: 'blob' }).then((res) => {
      //É feito um split para pegar o nome do arquivo.
      const split = material.split('/');
      //É realizado as conversões.
      const url = URL.createObjectURL(new Blob([res.data]));

      //É criado um link que recebe o arquivo e é acionado imediatamente.
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', split[6]);
      link.click();

      dispatch({ type: 'MATERIAL_DOWNLOADED' });
    });
  };
};
