import { CarouselProvider, ButtonPlay, ButtonNext, ButtonBack, DotGroup, Image, Slider, Slide } from 'pure-react-carousel';
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './style.scss';

export const DisciplineHeader = ( props : any ) => {
	const {
		headerText,
		descriptionText,
		sliderMediaIds
	} = props;

	if (sliderMediaIds.length <= 0) { return null; }

	return (
		<div
			className="discipline-header"
			role="region"
			aria-roledescription="slider"
		>
			<CarouselProvider
				visibleSlides={1}
				totalSlides={sliderMediaIds.length}
				naturalSlideWidth={16}
				naturalSlideHeight={9}
				isIntrinsicHeight={true}
				hasMasterSpinner
				isPlaying
			>
				<Slider
					className="discipline-header__slider"
					classNameTray="discipline-header__slide-container"
				>
					{ sliderMediaIds.map((media : any, index : number) => (
						<Slide index={ index } key={ media.id }>
							<Image
								className="discipline-header__slide-image"
								src={ media.url }
								hasMasterSpinner
							/>
						</Slide>
					)) }
				</Slider>
				<div className="discipline-header__slider-overlay">
					<h2>{ headerText }</h2>
					<p>{ descriptionText }</p>
					<div className="discipline-header__slider-controls">
						<ButtonPlay
							childrenPlaying={ <FaPause aria-hidden="true" /> }
							childrenPaused={ <FaPlay aria-hidden="true" /> }
						/>
						<ButtonBack>
							<FaArrowLeft aria-hidden="true" />
						</ButtonBack>
						<DotGroup className="discipline-header__dot-controls" />
						<ButtonNext>
							<FaArrowRight aria-hidden="true" />
						</ButtonNext>
					</div>
				</div>
			</CarouselProvider>
		</div>
	);
}
