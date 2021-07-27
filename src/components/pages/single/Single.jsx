import './single.css'
import SinglePost from "../../singlePost/SinglePost";
import Footer from '../../footer/Footer';

export default function Single() {
    return (
        
        <div className="Single">
            <SinglePost className="SinglePost"/>
            <Footer />
        </div>
    )
}
