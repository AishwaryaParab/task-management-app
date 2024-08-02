import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [icon, setIcon] = useState(null);
  const [title, setTitle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const navTitle = getNavTitle(pathname);
    setTitle(navTitle.title);
    setIcon(navTitle.icon);
  }, [pathname]);

  const getNavTitle = (pathname) => {
    if (pathname === '/') {
      return {title: 'TO-DO APP', icon: null};
    } else if (pathname === '/tasks/add') {
      return {title: 'Add Task', icon: <IoArrowBack cursor="pointer" fontSize={40} onClick={() => navigate("/")} />};
    }

    // Regular expression for a UUID
    const editPathPattern = /^\/tasks\/edit\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    if (editPathPattern.test(pathname)) {
      return {title: 'Edit Task', icon: <IoArrowBack cursor="pointer" fontSize={40} onClick={() => navigate("/")} />};
    }

    return {title: 'To Do App', icon: null};
  }

  return (
    <div className="navbar">
        {icon}
        <p>{title}</p>
    </div>
  )
}

export default Navbar