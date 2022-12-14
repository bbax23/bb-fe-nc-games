import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = ({category, setCategory}) => {
 
    const [categories, setCategories] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://be-games-example-api.herokuapp.com/api/categories').then(({data}) => setCategories(data.categories))}, [])

    const handleChange = (e) => {
        e.preventDefault()
        setCategory("")
        if(e.target.value === "Categories") navigate("/")
        else navigate(`/${e.target.value}`)
    }
    
    return(
        <section>
            <h4>Please use the drop down to search for reviews by the game category.</h4>
            <form onSubmit={handleChange}>
                <label htmlFor="categDropDown">Search Category: </label>
                <select id="categDropDown" value={category} onChange={handleChange}>
                    <option key="Categories" value="Categories">All Reviews</option>
                    {categories.map((categ) => {
                        return (
                            <option key={categ.slug} value={categ.slug}>{categ.slug}</option>
                        )
                    })}
                </select>
            </form>
        </section>
    )
}

export default Categories;