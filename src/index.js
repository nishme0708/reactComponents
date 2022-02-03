import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from '@faker-js/faker';

const App = function() {
    return (
        <div className='ui container comments'>
            <CommentDetail author="Nishant" timeAgo="Todat at 4:00 PM" avatar={faker.image.avatar()} text="Cool blog post"/>
            <CommentDetail author="Darshan" timeAgo="Todat at 5:00 PM" avatar={faker.image.avatar()} text="Nice blog post"/>
            <CommentDetail author="Swapnil" timeAgo="Todat at 6:00 PM" avatar={faker.image.avatar()} text="Super blog post"/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
