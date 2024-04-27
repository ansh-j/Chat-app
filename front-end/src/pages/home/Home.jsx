import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/siderbar/Sidebar";

const Home = () => {
  return (
    <div className="flex max-md:flex-col md:h-[550px] max-md:h-[calc(100vh-20px)] max-md:w-[70vh] max-md:gap-4  overflow-x-hidden rounded-lg overflow-y-auto bg-slate-900 scrollbar-hide">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
