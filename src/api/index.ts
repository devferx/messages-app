import axios from "axios";

import { Contact } from "../interfaces";
import { getDay } from "../utils/date";

export async function getContacts(cantResults = 30) {
  const response = await axios.get(
    `https://randomuser.me/api/?results=${cantResults}`
  );

  return response.data.results.map((contact: any) => ({
    id: contact.login.uuid,
    name: `${contact.name.title} ${contact.name.first} ${contact.name.last}`,
    image: contact.picture.medium,
    lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    lastMessageDate: getDay(new Date(contact.registered.date)),
  })) as Contact[];
}
