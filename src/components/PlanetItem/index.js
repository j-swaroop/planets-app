// Write your code here
import './index.css'

const PlanetItem = props => {
    const {details} = props
    return(
        <div className="item">
            <img alt={`planet ${details.name}`} src={details.imageUrl} className="image" />
            <h1 className="planet-name"> {details.name} </h1>
            <p className="description"> {details.description} </p>
        </div>
    )
}

export default PlanetItem