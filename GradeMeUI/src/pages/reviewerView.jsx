import React, { Component } from 'react';
class ReviewerView extends Component{
    render() {
        return (
            <body>
                <div class="getReviewed"></div>
                <div class="myReviews"></div>
                <div class="availableReviews"></div>
                <div class="currentReviews"></div>
                <div class="accountSettings"></div>
            </body>
        );
    }      
}
export default ReviewerView;