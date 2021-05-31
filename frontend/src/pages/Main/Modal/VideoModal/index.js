import React from 'react';
import { ToastContainer } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';

import { Opacity, ModalContainer, Close } from '../allModalStyles';
import { VideoContent } from './styles';
import { closeModal } from '@/modalActions';

export default function VideoModal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  return (
    <>
      <ModalContainer
        maxW={modal.maxW}
        maxH={modal.maxH}
        minW={modal.minW}
        minH={modal.minH}
      >
        <ToastContainer>{modal.error}</ToastContainer>
        {modal.activeModal.type.name === 'ModalConfirmation' ||
        modal.activeModal.type.name === 'ModalThanked' ? (
          ''
        ) : (
          <div id="close">
            <Close onClick={() => dispatch(closeModal())}>
              <MdClose />
            </Close>
          </div>
        )}
        <VideoContent>{modal.activeModal}</VideoContent>
      </ModalContainer>
      <Opacity />
    </>
  );
}
