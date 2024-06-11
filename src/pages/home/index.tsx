import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateHeaderTitle } from "../../redux/reducers/global.reducer";

function Home() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(updateHeaderTitle({title: 'Home Screen'}));
    },[]);
    
    return(
        <h2>Home Screen</h2>
    );
}

export default Home;