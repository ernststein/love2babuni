import "./App.css";
import React, { useState } from "react";
import { Heart } from "lucide-react";

function App() {
	const [openState, setOpenState] = useState(0);
	const [audio] = useState(new Audio("/audio/Blue-Yung-Kai.mp3"));
	const [isPlaying, setIsPlaying] = useState(false);

	const letterContent = `My Dearest Mashfika,

	I want to start by saying that I am not a fan of writing letters or huge paragraphs, but for you the case is different. I wish to express all my thoughts as much as possible to you. And as it is Valentine’s Day, I figured it would be the best time to convey my feelings in this letter.

    I know I haven’t been the best boyfriend or the boyfriend you expect me to be. I know you deserve way better than me, and I will never understand why you would choose me when you can be with anyone you want. But I can’t begin to express my gratitude for choosing me out of all the boys in the world. You are everything I could ask for, and I don’t want anything more than you. I know it’s really difficult to believe when I say I am lifeless without you, but it’s the truth. Thank you for saving me from all the boredom of life and making me feel special. In a world full of fading stars, you are the sun that lights up my universe and the moon that outshines all the stars and makes all the stars fade. If I were able to learn all the languages, I would still not be able to find the words to describe your beauty. There is no one else for me but you. You are the only one who holds my heart, and I always wish to give you mine in return.

	I apologize for being such a headache. Thank you for being the love of my life. There is no way to express my love for you, and I’ll keep loving you with every corner of my soul for an eternity. Happy Valentine’s Day, my love.

Forever Yours,
Soumya Mahbub`;

	const handleOpen = () => {
		if (!isPlaying) {
			let volume = 0;
			audio.volume = 0;
			audio.play();
			setIsPlaying(true);
			const volumeInterval = setInterval(() => {
				if (volume < 0.1) {
					volume += 0.033; // Increase by about 0.033 every 100ms
					audio.volume = Math.min(volume, 1); // Ensure volume does not exceed 1
				} else {
					clearInterval(volumeInterval); // Stop once the volume reaches 1
				}
			}, 1000);
		}
		setOpenState(1);
		setTimeout(() => setOpenState(2), 1500);
	};

	const handleClose = () => {
		audio.pause();
		audio.currentTime = 0;
		audio.volume = 0;
		setIsPlaying(false);
		setOpenState(1);
		setTimeout(() => setOpenState(0), 1500);
	};

	return (
		<div className="container">
			<div className="letter-wrapper">
				<div className="envelope-container">
					<div
						className={`envelope ${openState === 2 ? "open" : ""} ${
							openState === 2 ? "fully-open" : ""
						}`}
						onClick={openState === 0 ? handleOpen : undefined}
					>
						<div
							className={`flap top-flap ${
								openState > 0 ? "open" : ""
							}`}
						/>
						<div
							className={`flap bottom-flap ${
								openState > 0 ? "open" : ""
							}`}
						/>
						<div
							className={`letter-content ${
								openState === 2 ? "visible" : ""
							}`}
						>
							<div className="header"> Happy Valentine’s Day, Babuni!</div>
							<div className="photo-container">
								<div className="floating-hearts">
									<Heart
										size={20}
										className="floating-heart"
									/>
									<Heart
										size={20}
										className="floating-heart"
									/>
									<Heart
										size={20}
										className="floating-heart"
									/>
									<Heart
										size={20}
										className="floating-heart"
									/>
								</div>
								<div className="photo-wrapper">
									<img
										src="/image/us.jpg"
										alt="Us"
										className="photo"
									/>
								</div>
							</div>

							<div className="letter-text">{letterContent}</div>

							{openState === 2 && (
								<div className="button-container">
									<button
										onClick={handleClose}
										className="close-button"
									>
										Close Letter
									</button>
								</div>
							)}
						</div>
						<div
							className={`envelope-front ${
								openState === 0 ? "visible" : ""
							}`}
						>
							<Heart className="heart-icon" />
							<div className="click-text">Click to Open</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
