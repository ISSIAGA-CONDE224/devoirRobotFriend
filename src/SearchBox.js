import React from 'react';

const searchBox = ({searchfield,searchChange}) =>{
    return(
        <div className = "pa2">
                <input
                    className = "ba pa3 b--green bg-lightest-blue"
                    type = "search" placeholder="Rechercher un robot !"
                    onChange = {searchChange}
                 /> 
        </div>
         
         );
}
export default searchBox;