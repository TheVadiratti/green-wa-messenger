import { Dispatch, SetStateAction } from 'react';
import { checkResponse } from './utils';
import { TMessage } from '../types';

const receiveNotification = (
  apiUrl: string,
  idInstance: string,
  apiTokenInstance: string,
  currDialog: string,
  messages: TMessage[],
  setMessages: Dispatch<SetStateAction<TMessage[]>>,
  reload: () => void,
) => fetch(`${apiUrl}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`)
  .then((res) => checkResponse(res, 'Ошибка запроса уведомления'))
  .then((res) => {
    if (res.body) {
      const { body, receiptId } = res;

      if (body.senderData.sender.slice(0, 11) === currDialog) {
        const newMessages = messages;
        newMessages.unshift({ text: body.messageData.textMessageData.textMessage, owner: 'notMe' });
        setMessages(newMessages);
      }

      fetch(`${apiUrl}/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}
`, {
        method: 'DELETE',
      })
        .then((result) => checkResponse(result, 'Ошибка запроса уведомления.'))
        .then((result) => {
          if (!result.result) {
            return Promise.reject(new Error('Уведомление не удалено.'));
          }
          return result;
        })
        .finally(() => {
          reload();
        })
        .catch((err) => console.log(err));
    } else {
      reload();
    }
  })
  .catch((err) => {
    console.log(err);
    reload();
  });

export default receiveNotification;
