import React, { useEffect } from 'react'
import './Contact.css'
import { MapContainer } from './MapContainer'

const Contact = () => {

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

	useEffect(() => {
		inputs.forEach((input) => {
			input.addEventListener("focus", focusFunc);
			input.addEventListener("blur", blurFunc);
		});
	})


	return (
		// <div className={classes.contactMe}>
		// 	<div className={classes.contactWrapper}>
		// 		<h1 className={classes.contactHeader}>Say hello</h1>
		// 		<div className={classes.contactForm}>
		// 			<form>
		// 				<input name='fullName' placeholder='Full Name' />
		// 			</form>
		// 		</div>
		// 	</div>
		// 	<div className={classes.contactMap}>
		// 		<MapContainer />
		// 	
		// 	</div>
		// </div>

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
					<form action="index.html" autoComplete="off">
						<h3 className="title">Let's get in touch</h3>
						<div className="input-container">
							<input type="text" name="name" className="input" />
							<label >Username</label>
							<span>Username</span>
						</div>
						<div className="input-container">
							<input type="email" name="email" className="input" />
							<label>Email</label>
							<span>Email</span>
						</div>
						<div className="input-container textarea">
							<textarea name="message" className="input"></textarea>
							<label>Message</label>
							<span>Message</span>
						</div>
						<input type="submit" value="Send" className="btn" />
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact