import "./App.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "react-toastify/ReactToastify.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "antd/dist/reset.css";

// import MainComp from './Components/ContextAPI/MainComp';
// import ViewServices from './Components/Admin/ViewServices';
// import AddPackages from './Components/Admin/AddPackages';
// import AddServices from './Components/Admin/AddServices';
// import ViewPackages from './Components/Admin/ViewPackages';
// import SendEnquiry from './Travel/SendEnquiry';

// import AddServices from './Components/Admin/AddServices';

// import StudentsData from './Components/CRUDClass/StudentsData';
// import AddStudents from './Components/CRUDClass/AddStudents';
// import StateEx from './Components/Hooks/StateEx';
// import StudentsData from './Components/CRUDClass/StudentsData';

import Header from "./Travel/Header";
import Footer from "./Travel/Footer";
import Routing from "./Travel/Routing";
import { createContext, useState } from "react";


export const loginStatus = createContext(false);

function App() {
  const [login, setLogin] = useState(0);
  return (
    <div className="App">
      <loginStatus.Provider value={[login, setLogin]}>
        <Header/>
        <Routing/>
        <Footer/> 
      </loginStatus.Provider>
      {/* <Provider store={store}>
        <MobileContainer/>
      </Provider> */}
    </div>
  );
}

export default App;
