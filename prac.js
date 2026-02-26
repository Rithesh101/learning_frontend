const users = [
  { id: 1, name: "Alice", email: "alice@example.com", isActive: true, role: "admin" },
  { id: 2, name: "Bob", email: "bob@example.com", isActive: false, role: "user" },
  { id: 3, name: "Charlie", email: "charlie@example.com", isActive: true, role: "user" }
];

const new_array  = users.filter(user => user.isActive === true);
console.log(new_array)