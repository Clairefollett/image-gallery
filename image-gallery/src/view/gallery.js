import React from 'react';

export default function Gallery(props) {
    const galleryObj = props.array.map((schnoodle, index) => {
        return (
            <li key={index}>
                <p>Title: {schnoodle.title}</p>
                <img className='gallery-img' src={schnoodle.url} alt='' />
                <p>description: {schnoodle.description}</p> 
            </li>    
        )
    });
    return (
        <ul>{galleryObj}</ul>
    )
}

Gallery.propTypes = {
    array: React.PropTypes.array
};
