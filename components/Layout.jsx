import Navbar from './Navbar';
import MyFooter from './MyFooter';
const Layout = ({ children }) => {
  return (
    <div className='content'>
      <Navbar />
      {children}
      <MyFooter />
    </div>
  );
};

export default Layout;
