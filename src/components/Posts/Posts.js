import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../../actions';
import _ from 'lodash';

class Posts extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this
            .props
            .fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, (post, ind) => {
            if (post.content) {
                return (
                    <li className='list-group-item' key={ind}>
                        {post.content}
                    </li>
                );
            }
        });
    }

    render() {
        return (
            <div style={{
                padding: 10
            }}>
                <div className='text-right'>
                    <Link to='/posts/new' className='btn btn-primary'>
                        Create Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>{this.renderPosts()}</ul>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {posts: state.posts};
};

export default connect(mapStateToProps, {fetchPosts})(Posts);