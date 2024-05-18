import React, { useContext } from 'react'
import { MyContext } from '../context/Context';


function Search() {

    const { searchQuery, updateSearchQuery } = useContext(MyContext);
    return (
        <div>
            <center>
            <section class="search__bar mb-4">
                <form action="" class="container search__bar-container">
                    <div class="">
                        <i class='bx bx-search-alt'></i>
                        <input
                            type="search"
                            value={searchQuery}
                            onChange={(e) => updateSearchQuery(e.target.value)}
                            placeholder="Search videos..."
                        />
                    </div>
                    <button type="submit" class="btn">Go</button>
                </form>
            </section>
            </center>
        </div>
    )
}

export default Search