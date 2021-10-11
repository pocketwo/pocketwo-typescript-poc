import React from 'react';
import {ModalView, Modal} from './Styles';

interface Props {
  children: React.ReactNode;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContainer: React.FC<Props> = ({
  children,
  modalVisible,
  setModalVisible,
}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <ModalView>{children}</ModalView>
    </Modal>
  );
};

export default ModalContainer;
