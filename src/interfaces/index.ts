export interface Contact {
  id: string;
  name: string;
  image: string;
  lastMessage: string;
  lastMessageDate: string;
}

export interface Message {
  id: string;
  to: string;
  from: string;
  date: Date;
  data: string;
  viewed: boolean;
}
