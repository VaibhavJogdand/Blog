import './single.css'
import SinglePost from "../../singlePost/SinglePost";
import Footer from '../../footer/Footer';
import Sidebar from "../../sidebar/Sidebar"

export default function Single() {
    return (
        
        <div className="Single">
            <SinglePost className="SinglePost"/>
            <Footer />
        </div>
    )
}
