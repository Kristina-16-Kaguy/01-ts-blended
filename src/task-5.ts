interface NewUser {
  name: string;
  age: number;
}

interface OutputUser {
  name: string;
  age: number;
  isAdmin: boolean;
}

function createUser({ name, age }: NewUser): OutputUser {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });
