import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { Redirect } from 'react-router-dom';
import Spinner from '../common/Spinner';

class Courses extends React.Component {
    state = {
        redirectToAddCoursePage: false
    };

    componentDidMount() {
        const { courses, authors, actions } = this.props;

        if (courses.length === 0) {
            actions.loadCourses().catch(error => {
                alert('Loading courses failed' + error);
            });
        }

        if (authors.length === 0) {
            actions.loadAuthors().catch(error => {
                alert('Loading authors failed' + error);
            });
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.redirectToAddCoursePage && (
                    <Redirect to="/course" />
                )}
                <h2>Courses</h2>
                {this.props.loading ? (
                    <Spinner />
                ) : (
                    <Fragment>
                        <button
                            style={{ marginBottom: 20 }}
                            className="btn btn-primary add-course"
                            onClick={() =>
                                this.setState({ redirectToAddCoursePage: true })
                            }
                        >
                            Add Course
                        </button>
                        <CourseList courses={this.props.courses} />
                    </Fragment>
                )}
            </Fragment>
        );
    }
}

Courses.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps({ courses, authors, apiCallsInProgress }) {
    return {
        courses:
            authors.length === 0
                ? []
                : courses.map(course => {
                      return {
                          ...course,
                          authorName: authors.find(
                              a => a.id === course.authorId
                          ).name
                      };
                  }),
        authors: authors,
        loading: apiCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(
                courseActions.loadCourses,
                dispatch
            ),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
