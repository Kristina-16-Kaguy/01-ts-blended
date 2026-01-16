// Функція fetchUser повертає проміс, який через axios отримує одного користувача з API по userId.

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUser.

import axios from "axios";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  adress: Address;
  phone: string;
  website: string;
  company: Company;
}

const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};

const getUserName = async (id: number): Promise<void> => {
  const user = await fetchUser(id);
  console.log(user.name);
};

getUserName(1);
