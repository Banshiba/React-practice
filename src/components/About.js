import UserClass from "./UserClass";
import User from "./User";

const About = () => {
  const users = [
    'Banshiba', 'AbhishekBantiyaSAP', 'Ashish', 'Karthikey', 
    'Rahul', 'Aditya', 'Tanveer', 'Harshith', 'Nishit', "Rohan"
  ];
  
  return (
    <div className="user-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {users.map((user) => (
        <UserClass key={user} name={user} />
      ))}
      <User />
    </div>
  );
};

export default About;
