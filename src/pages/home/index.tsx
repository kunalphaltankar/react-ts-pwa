import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateHeaderTitle } from "../../redux/reducers/global.reducer";
import CandidateDetails from "./components/candidate-details";

function Home() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(updateHeaderTitle({title: 'Home Screen'}));
    },[]);
    
    return <CandidateDetails />;
}

export default Home;