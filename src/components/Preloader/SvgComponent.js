import React, { useState } from "react";
import { motion } from 'framer-motion'
import classes from './svgcomponent.module.css'

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (i) => {
		const delay = i * 0.5;
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
				opacity: { delay, duration: 0.01 },
			}
		};
	}
};

const SVGComponent = (props) => {
	return (
		<>
			<div className={classes.svgWrapper}>
				<motion.div
					animate={{ rotate: 360, }}
					transition={{
						duration: 1,
						repeat: Infinity,
					}}>
					<motion.svg viewBox="0 0 500 500"
						initial="hidden"
						animate="visible"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100vh",
							width: "100vw",
						}}
						{...props}>
						<defs>
							<linearGradient
								gradientUnits="userSpaceOnUse"
								x1={154.022}
								y1={110.857}
								x2={154.022}
								y2={149.021}
								id="gradient-0"
							>
								<stop
									offset={0}
									style={{
										stopColor: "rgba(216, 216, 216, 1)",
									}}
								/>
								<stop
									offset={1}
									style={{
										stopColor: "rgba(165, 165, 165, 1)",
									}}
								/>
							</linearGradient>
						</defs>
						<motion.path
							d="M 116.283 85.598 L 135.26 115.067 L 97.305 115.067 L 116.283 85.598 Z"
							style={{
								stroke: "rgb(0, 0, 0)",
								filter: "none",
								fillRule: "nonzero",
								fill: "rgb(66, 133, 244)",
							}}
							variants={draw}
							custom={1}
							transform="matrix(0, 1, -1, 0, 368.899017, 70.097237)"
							className={"t1"}
						/>
						<motion.path
							variants={draw}
							custom={1}
							d="M 116.283 85.598 L 135.26 115.067 L 97.305 115.067 L 116.283 85.598 Z"
							style={{
								stroke: "rgb(0, 0, 0)",
								fill: "rgb(219, 68, 55)",
							}}
							transform="matrix(0, -1, 1, 0, 138.083588, 302.70932)"
							className="t2"
						/>
						<motion.path
							variants={draw}
							custom={1}
							d="M 116.283 85.598 L 135.26 115.067 L 97.305 115.067 L 116.283 85.598 Z"
							style={{
								stroke: "rgb(0, 0, 0)",
								fill: "rgb(244, 180, 0)",
							}}
							transform="matrix(0, 1, -1, 0, 338.434113, 89.178238)"
							className="t3"
						/>
						<motion.path
							variants={draw}
							custom={1}
							d="M 116.283 85.598 L 135.26 115.067 L 97.305 115.067 L 116.283 85.598 Z"
							style={{
								stroke: "rgb(0, 0, 0)",
								fill: "rgb(15, 157, 88)",
							}}
							transform="matrix(0, -1, 1, 0, 138.05719, 341.116547)"
							className="t4"
						/>
						<motion.path
							variants={draw}
							custom={1}
							d="M 116.283 85.598 L 135.26 115.067 L 97.305 115.067 L 116.283 85.598 Z"
							style={{
								stroke: "rgb(0, 0, 0)",
								fill: "rgb(15, 157, 88)",
							}}
							transform="matrix(0, 1, -1, 0, 368.956879, 108.284836)"
							className="t5"
						/>
						<motion.path
							variants={draw}
							custom={1}
							d="M 116.283 85.598 L 135.26 115.067 L 97.305 115.067 L 116.283 85.598 Z"
							style={{
								stroke: "rgb(0, 0, 0)",
								fill: "rgb(244, 180, 0)",
							}}
							transform="matrix(0, -1, 1, 0, 168.087982, 360.643738)"
							className="t6"
						/>
						<motion.path
							variants={draw}
							custom={1}
							d="M 116.283 85.598 L 135.26 115.067 L 97.305 115.067 L 116.283 85.598 Z"
							style={{
								stroke: "rgb(0, 0, 0)",
								fill: "rgb(219, 68, 55)",
							}}
							transform="matrix(0, 1, -1, 0, 368.950378, 147.31427)"
							className="t7"
						/>
						<motion.path
							variants={draw}
							custom={1}
							d="M 116.283 85.598 L 135.26 115.067 L 97.305 115.067 L 116.283 85.598 Z"
							style={{
								stroke: "rgb(0, 0, 0)",
								fill: "rgb(66, 133, 244)",
							}}
							transform="matrix(0, -1, 1, 0, 138.182938, 379.919983)"
							className="t8"
						/>
					</motion.svg >
				</motion.div >
			</div>
		</>
	)
}

export default SVGComponent;