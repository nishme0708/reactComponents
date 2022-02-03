import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from '@faker-js/faker';
import ApprovalCard from './ApprovalCard';

const App = function() {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail
                    author='Nishant'
                    timeAgo='Todat at 4:00 PM'
                    avatar={faker.image.avatar()}
                    text='Cool blog post'
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Darshan'
                    timeAgo='Todat at 5:00 PM'
                    avatar={faker.image.avatar()}
                    text='Nice blog post'
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Swapnil'
                    timeAgo='Todat at 6:00 PM'
                    avatar={faker.image.avatar()}
                    text='Super blog post'
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
