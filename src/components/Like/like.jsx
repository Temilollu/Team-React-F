import React from 'react';


class Like extends React.Component {
 
    render() { 
       const {toggle, Click} = this.props
        return ( 
        <span data-toggle="tooltip" data-placement="right" title={!toggle ? 'add to Favourites' : 'remove from favourites'}
         style={{color :  toggle ?  "red" :"white", paddingRight : '12px' }} onClick={Click} > 
         <svg className={`btn_classa bi bi-heart-fill`} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path></svg>
       </span>
         );
    }
}

export default Like;