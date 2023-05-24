export type TDialog = {
  tel: string;
};

export type TMessage = {
  text: string;
  owner: 'me' | 'notMe';
  currDialog?: string;
};

export type TMessages = {
  [chatName: string]: TMessage[];
};
