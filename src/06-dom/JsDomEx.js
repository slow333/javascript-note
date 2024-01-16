import React from 'react';

const JsDomEx = () => {
   const list = ['aa','bb','cc']
   return (
       <div>
          <button onClick={(event) => console.log(event.target)}>click me</button>
          <button onClick={(event) => console.log(event.bubbles)}
          className='btn btn-primary'>click me</button>
          {list.map(lst =>
             <ul onClick={(e) => console.log(e.target)}>
                <li onClick={(event) => {
                   // console.log(event.target)
                   // event.stopPropagation()
                }}>
                   {lst}</li>
             </ul>
          )}
       </div>
   );
};

export default JsDomEx;