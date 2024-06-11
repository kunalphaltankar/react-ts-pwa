import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateHeaderTitle } from "../../redux/reducers/global.reducer";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateHeaderTitle({ title: "Dashboard Screen" }));
  }, []);

  return <h2>Dashboard Screen</h2>;
}

export default Dashboard;
