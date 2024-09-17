import './index.css';
function Card(props) {
    const { image, firstName, lastName, email, phone, address, cars } = props
    return <div className='box'>
        <img src={image} alt="random photo" width={400} height={400}/>
        <h3 className='name__user'>{firstName} {lastName}</h3>

        <div className='phone_email'>
            <span>Phone: {phone}</span>
            <span>Email: {email}</span>
        </div>

        <div className='hero_boxDiv'>
            <label htmlFor="region" className='adress'>
                <input type="checkbox" id='region' />
                <span>{address.region}</span>
            </label>
            <label htmlFor="region" className='adress'>
                <input type="checkbox" id='region' />
                <span>{address.zip}</span>
            </label>
        </div>
        {
            cars.length != [] ? <div className='cars'>
                <label htmlFor="region" className='adress'>
                    <ul>{cars.map(function(element){
                        return <li className='list'>
                            <label className='map_label'>
                            <span>{element}</span>
                            <input type="checkbox"/>
                        </label>
                        </li>
                    })}</ul>
                </label>
            </div> : null
        }
    </div>
}

export default Card