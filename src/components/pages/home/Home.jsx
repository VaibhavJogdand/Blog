import Header from "../../header/Header";
import "./home.css";
import Posts from "../../posts/Posts";
import axios from "../../../axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../footer/Footer";

function Home() {
	const [posts, setPosts] = useState([]);
	const { search } = useLocation();

	useEffect(() => {
		const fetchPosts = async () => {
			console.log(search);
			const res = await axios.get("/posts" + search);

			setPosts(res.data);
		};
		fetchPosts();
	}, [search]);

	return (
		<>
			<Header />
			<div className="home">
				<Posts posts={posts} />
			</div>
			<Footer />
		</>
	);
}

export default Home;
