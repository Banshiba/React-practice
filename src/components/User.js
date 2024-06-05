import useContactProfile from "./utils/useContactProfile";

const User = () => {
  const info = useContactProfile();
  console.log("info" + info);
  
  return (
    <div className="user-card bg-black text-blue-400 rounded-lg shadow-lg p-6 flex flex-col items-center">
      <p className="text-lg">{info.fact}</p>
    </div>
  );
};

export default User;
