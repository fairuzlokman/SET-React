import { useEffect } from "react";
import useAuth from "../hooks/useAuth"

const Home = () => {
  // const { fetchUsers } = useAuth();

  // useEffect(() => fetchUsers(), [])
  
  return (
    <div className="h-[200px] flex flex-row">
      <p className="text-[50px]">The</p>
      <div className="flex flex-row items-end">
        <p className="text-[100px] text-center">Ticketing App</p>
      </div>
    </div>
  )
}

export default Home