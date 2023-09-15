import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/authSlice";
import { useEffect } from "react";
export default function Logout({}) {
  const dispatch = useDispatch();
  localStorage.clear();
  dispatch(logoutUser());
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return;
}
