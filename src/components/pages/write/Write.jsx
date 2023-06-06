import "./write.css";
import { BiImageAdd } from "react-icons/bi";
import { useContext, useRef, useState } from "react";
import axios from "../../../axios";
import { Context } from "../../../context/Context";

export default function Write() {
	const { user } = useContext(Context);
	const titleRef = useRef();
	const descRef = useRef();
	const [file, setFile] = useState(null);
	const [cat, setCat] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(cat);
		const newPost = {
			title: titleRef.current.value,
			desc: descRef.current.value,
			username: user.username,
			categories: cat,
		};
		if (file) {
			const data = new FormData();
			const fileName = Date.now() + file.name;
			data.append("name", fileName);
			data.append("file", file);
			newPost.img = fileName;
			try {
				await axios.post("/upload", data);
			} catch (error) {}
		}
		try {
			const res = await axios.post("/posts", newPost);
			window.location.replace("/post/" + res.data._id);
		} catch (error) {}
	};

	return (
		<div className="write">
			{file && (
				<img
					className="writeImg"
					src={window.webkitURL.createObjectURL(file)}
					alt="post img"
				></img>
			)}
			<form className="writeForm" onSubmit={handleSubmit}>
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<BiImageAdd className="writeIcon" />
					</label>
					<input
						id="fileInput"
						type="file"
						style={{ display: "none" }}
						onChange={(e) => {
							setFile(e.target.files[0]);
						}}
					></input>
					{/* <div id='fileInput' style={{display: 'none'}}>
                        <FileBase64
                            multiple={ false }
                            onDone={ ({base64})=>{
                            setFile(base64);
                        } } />
                    </div>  */}
					<input
						type="text"
						placeholder="Title"
						className="writeInput"
						ref={titleRef}
						autoFocus={true}
					></input>
				</div>
				<div class="grow-wrap">
					<textarea
						name="text"
						placeholder="Tell your story..."
						ref={descRef}
						onInput={(e) =>
							(e.target.parentNode.dataset.replicatedValue = e.target.value)
						}
					></textarea>
				</div>
				<div className="selectCat">
					<h6 className="selectCatTitle">Select Category</h6>
					<div className="selectCatWrapper">
						<div className="selectCatItem">
							<input
								type="radio"
								id="cat1"
								name="cat"
								value="music"
								onChange={(e) => setCat(e.target.value)}
							/>
							<label for="cat1">Music</label>
							<br />
						</div>
						<div className="selectCatItem">
							<input
								type="radio"
								id="cat2"
								name="cat"
								value="tech"
								onChange={(e) => setCat(e.target.value)}
							/>
							<label for="cat2">Tech</label>
							<br />
						</div>
						<div className="selectCatItem">
							<input
								type="radio"
								id="cat3"
								name="cat"
								value="sports"
								onChange={(e) => setCat(e.target.value)}
							/>
							<label for="cat3">Sports</label>
							<br />
						</div>
						<div className="selectCatItem">
							<input
								type="radio"
								id="cat4"
								name="cat"
								value="programming"
								onChange={(e) => setCat(e.target.value)}
							/>
							<label for="cat4">Programming</label>
							<br />
						</div>
						<div className="selectCatItem">
							<input
								type="radio"
								id="cat5"
								name="cat"
								value="philosophy"
								onChange={(e) => setCat(e.target.value)}
							/>
							<label for="cat5">Philosophy</label>
							<br />
						</div>
						{/* <div className="selectCatItem">
							<input
								type="radio"
								id="cat5"
								name="cat"
								value="other"
								onChange={(e) => setCat(null)}
							/>
							<label for="cat5">Other</label>
							<br />
						</div> */}
					</div>
				</div>
				<div className="btnContainer">
					<button type="submit" className="writeSubmit btn btn-outline-success">
						Publish
					</button>
				</div>
			</form>
		</div>
	);
}
