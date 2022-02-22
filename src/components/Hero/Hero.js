import React from "react";
import classes from "./Hero.module.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
	return (
		<>
			<div className={classes.hero}>
				<div className={classes.heroIntro}>
					<span className={classes.letterAnimate}> H</span>
					<span className={classes.letterAnimate}>i</span>
					<span className={classes.letterAnimate}>,</span>
					<br />
					<span className={classes.letterAnimate}>I</span>
					<span className={classes.letterAnimate}>'</span>
					<span className={classes.letterAnimate}>m</span>&emsp; &nbsp;
					<span className={classes.letterAnimate}>S</span>
					<span className={classes.letterAnimate}>a</span>
					<span className={classes.letterAnimate}>r</span>
					<span className={classes.letterAnimate}>v</span>
					<span className={classes.letterAnimate}>e</span>
					<span className={classes.letterAnimate}>s</span>
					<span className={classes.letterAnimate}>h</span>
					<div className={classes.typewriter}>
						<Typewriter
							options={{
								autoStart: true,
								loop: true,
							}}
							onInit={(typewriter) => {
								typewriter
									.pauseFor(1500)
									.typeString("Full Stack Web Developer")
									.pauseFor(500)
									.deleteChars(24)
									.pauseFor(500)
									.typeString("ui/ux Designer")
									.deleteChars(14)
									.pauseFor(500)
									.typeString("Native iOS Developer")
									.deleteChars(13)
									.pauseFor(500)
									.typeString("Android Developer")
									.deleteChars(24)
									.pauseFor(500)
									.typeString("Open Source Contributor")
									.deleteChars(23)
									.pauseFor(500)
									.deleteAll()
									.callFunction(() => {
										console.log("All strings were deleted");
									})
									.start();
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
