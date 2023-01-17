import React, {useState, useContext, useEffect} from 'react';
import {Door} from './DoorType';
import {SocketContext} from '../../context/SocketContext';

interface DataType {
  doorsList: Door[];
}

const useSocketManager = (): {
  doorsList: Door[];
  setDoorsList: React.Dispatch<React.SetStateAction<Door[]>>;
  disconnectSocket: () => void;
} => {
  const [doorsList, setDoorsList] = useState<Door[]>([]);
  const {socket} = useContext(SocketContext);

  const disconnectSocket = () => {
    socket.disconnect();
  };

  useEffect(() => {
    socket.on('doors', (data: DataType) => {
      // const array = data.doorsList.map(item => ({
      //   lockID: item.lockID,
      //   doorName: item.doorName,
      //   isOpen: item.isOpen,
      //   inBtRange: false,
      //   isExpanded: false,
      // }));
      setDoorsList(
        data.doorsList.map(item => ({
          lockID: item.lockID,
          doorName: item.doorName,
          isOpen: item.isOpen,
          inBtRange: false,
          isExpanded: false,
        })),
      );
    });
  }, []);

  return {
    doorsList,
    setDoorsList,
    disconnectSocket,
  };
};

export default useSocketManager;
