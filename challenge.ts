// challenge.ts

  interface Users {
    age: number;
    name: string;
  }

  const prettyPrintWilder = (users: Users) => {
    users.map((user: Users) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };

  const wilders : object[] = [];
  const user1 = { name: "Pierre", age: 23 };
  const user2: any = { name: "Paul", birthday: "10/02/1990" };
  const user3 = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);