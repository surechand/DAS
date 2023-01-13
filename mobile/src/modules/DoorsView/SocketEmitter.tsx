import {useContext} from 'react';
import {useRoute} from '@react-navigation/core';
import {DoorsScreenRouteProp} from '../../navigation/Params';
import {SocketContext} from '../../context/SocketContext';

const useSocketEmitter = (): {
  refreshDoorsList: () => void;
  lockLongOpen: (doorId: string) => void;
  lockQuickOpen: (doorId: string) => void;
  lockClose: (doorId: string) => void;
} => {
  const {params} = useRoute<DoorsScreenRouteProp>();
  const {email} = params;
  const {socket} = useContext(SocketContext);

  const refreshDoorsList = () => {
    socket.emit('doorsList', {email});
  };

  const lockLongOpen = (doorId: string) => {
    socket.emit('openDoor', {doorId});
  };

  const lockQuickOpen = (doorId: string) => {
    socket.emit('quickOpenDoor', {doorId});
  };

  const lockClose = (doorId: string) => {
    socket.emit('closeDoor', {doorId});
  };

  return {
    refreshDoorsList,
    lockLongOpen,
    lockQuickOpen,
    lockClose,
  };
};

export default useSocketEmitter;
