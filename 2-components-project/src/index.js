import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from "@faker-js/faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>
                    <p>Are you sure you want to do this?</p>
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    avatar={faker.image.avatar()} 
                    content="Nice!" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Craig" 
                    timeAgo="Today at 6:00PM" 
                    avatar={faker.image.avatar()} 
                    content="So cool"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Pam" 
                    timeAgo="Yesterday at 5:00PM" 
                    avatar={faker.image.avatar()} 
                    content="This is great" 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

