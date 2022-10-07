import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css'


import Cards from '../../components/Cards'
import './style.css'



const Portfolio = () => {

    const [data, setdata] = useState([]);

    const breakpoints = {
        default: 4,
        1500: 3,
        1100: 2,
        700: 1
      }

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const { data } = await axios.get(`https://api.github.com/users/Littlerou/repos`)
                setdata(data)
                console.log(data)
            } catch (error) {
                console.log(error)

            }
        }
        fetchRepos()
    }, [])
    const renderRepo = (repo) => {
        return (
          <div key={repo.id}>
            <Cards repo={repo}/>
          </div>
        );
      }
    return(
        <div id="portfolio-div">
            <h1>Projects</h1>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                >
                {data.map(renderRepo)}
            </Masonry>
        </div>
    )
}

export default Portfolio;