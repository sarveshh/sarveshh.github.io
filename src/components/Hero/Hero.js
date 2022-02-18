import React from 'react'
import classes from './Hero.module.css'
import Typewriter from 'typewriter-effect';

const Hero = () => {
	return (
		<>
			<div className={classes.hero}>
				<div className={classes.heroIntro}>
					<span class={classes.letterAnimate}>H</span>
					<span class={classes.letterAnimate}>i</span>
					<span class={classes.letterAnimate}>,</span><br />
					<span class={classes.letterAnimate}>I</span>
					<span class={classes.letterAnimate}>'</span>
					<span class={classes.letterAnimate}>m</span>&emsp; &nbsp;
					<span class={classes.letterAnimate}>S</span>
					<span class={classes.letterAnimate}>a</span>
					<span class={classes.letterAnimate}>r</span>
					<span class={classes.letterAnimate}>v</span>
					<span class={classes.letterAnimate}>e</span>
					<span class={classes.letterAnimate}>s</span>
					<span class={classes.letterAnimate}>h</span>
					<div className={classes.typewriter}>
						<Typewriter
							options={{
								autoStart: true,
								loop: true,
							}}
							onInit={(typewriter) => {
								typewriter.pauseFor(1500)
									.typeString('Full Stack Web Developer')
									.pauseFor(1000)
									.deleteChars(24)
									.typeString('ui/ux Designer')
									.deleteChars(14)
									.typeString('Native iOS Developer')
									.deleteChars(20)
									.typeString('Native Android Developer')
									.deleteChars(24)
									.typeString('Open Source Contributor')
									.deleteChars(23)
									.deleteAll()
									.callFunction(() => {
										console.log('All strings were deleted');
									})
									.start();
							}}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero