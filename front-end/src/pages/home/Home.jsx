import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/siderbar/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-slate-900">
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home