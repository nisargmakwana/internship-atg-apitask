// components/FallbackImage.js
import React from "react";

const DefaultImg = ({ src, alt, defaultSrc, ...props }) => {
	const handleError = (e) => {
		e.target.onerror = null; // Prevents looping if the default image also fails
		e.target.src = defaultSrc;
	};

	return <img src={src} alt={alt} onError={handleError} {...props} />;
};

export default DefaultImg;
