import React, { useEffect, useState } from 'react';

const Games = () => {

    const [games,setgames]=useState([]);
    
        useEffect(()=>{
            fetch('games.json')
            .then(res=>res.json())
            .then(data=>setgames(data))
            .catch(err=>console.log(err))
        },[])
    return (
        <div className='px-[145px]'>
             <div className='grid grid-cols-3 mt-12'>
              {
                games.map(game=>
                    <div className="card bg-base-100 w-96 shadow-sm mt-3 mb-3">
                <figure>
                    <img className='w-full h-[250px] object-cover'
                        src={game?.coverPhoto}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{game?.title}</h2>
                    <p>{game?.description}</p>
                   
         <div className='flex flex-2 gap-5 justify-between '>
            <div className=" justify-start mt-3">
        <p><i class="fa-solid fa-star text-yellow-500"></i> {game?.ratings}</p> 
        </div>

        <div className="card-actions justify-end">
        <button className="btn btn-primary">View details</button>
        </div>

        </div>
                    
                </div>
            </div>

                )
            }
          </div>
        </div>
    );
};

export default Games;