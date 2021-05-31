import React from 'react';
import { ToastContainer } from 'react-toastify';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { MdClose } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { Opacity, ModalContainer, Close } from '../allModalStyles';
import { closeModal } from '@/modalActions';

import { ArticleContent } from './styles';

export default function ArticleModal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  return (
    <>
      <ToastContainer>{modal.error}</ToastContainer>
      <DndProvider backend={HTML5Backend}>
        <ModalContainer
          maxW={modal.maxW}
          maxH={modal.maxH}
          minW={modal.minW}
          minH={modal.minH}
        >
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
          <ArticleContent>{modal.activeModal}</ArticleContent>
        </ModalContainer>
        <Opacity />
      </DndProvider>
    </>
  );
}
