// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
    const {planetsList} = props
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const renderPlanetItem = planetItem => {
        return(
            <PlanetItem key={planetItem.id} details={planetItem} />
        )
    }

    return(
        <div className="bg-container">
            <div className="responsive-container">
                <h1 className="heading"> PLANETS </h1>
                <div data-testid="planets" className="planets-container">
                    <Slider {...settings}>
                        {planetsList.map(planetItem => renderPlanetItem(planetItem))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default PlanetsSlider