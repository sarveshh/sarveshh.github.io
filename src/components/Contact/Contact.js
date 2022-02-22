import React, { useState, useEffect } from "react";
import "./Contact.css";
import { MapContainer } from "./MapContainer";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		const inputs = document.querySelectorAll(".input");

		function focusFunc() {
			let parent = this.parentNode;
			parent.classList.add("focus");
		}

		function blurFunc() {
			let parent = this.parentNode;
			if (this.value == "") {
				parent.classList.remove("focus");
			}
		}
		inputs.forEach((input) => {
			input.addEventListener("focus", focusFunc);
			input.addEventListener("blur", blurFunc);
		});
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(
			`The name you entered was: ${name}, the email you entered was: ${email}, and the message you entered was: ${message}`
		);
	};

	return (
		<div className="container">
			<div className="form">
				<div className="contact-info">
					<div className="info">
						<MapContainer />
					</div>
				</div>
				<div className="contact-form">
					<span className="circle one"></span>
					<span className="circle two"></span>
					<form autoComplete="off" onSubmit={handleSubmit}>
						<h3 className="title">Let's get in touch</h3>
						<div className="input-container">
							<input
								autoComplete="none"
								type="text"
								name="name"
								value={name}
								className="input"
								onChange={(e) => setName(e.target.value)}
							/>
							<label>Full Name</label>
							<span>Full Name</span>
						</div>
						<div className="input-container">
							<input
								type="email"
								value={email}
								autoComplete="off"
								name="email"
								className="input"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label>Email</label>
							<span>Email</span>
						</div>
						<div className="input-container textarea">
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								name="message"
								autoComplete="off"
								className="input"
							></textarea>
							<label>Message</label>
							<span>Message</span>
						</div>
						<input type="submit" value="Send Message" className="btn" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
