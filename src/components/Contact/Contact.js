import React from 'react'
import classes from './Contact.module.css'
import { MapContainer } from './MapContainer'

const Contact = () => {
	return (
		<div className={classes.contactMe}>
			<div className={classes.contactWrapper}>
				<h1 className={classes.contactHeader}>Say hello</h1>
				<div className={classes.contactForm}>

				</div>
			</div>
			<div className={classes.contactMap}>
				<MapContainer />
				{/* AIzaSyAoSOST6nQjpi1Xn_bBIWJQCX6_jKASWPU */}
			</div>
		</div>
	)
}

export default Contact