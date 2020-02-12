import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

const Courses = ({ courses, authors, actions }) => {
    useEffect(() => {
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
    }, [courses, authors, actions]);

    return (
        <React.Fragment>
            <h2>Courses</h2>
            <CourseList courses={courses} />
        </React.Fragment>
    );
};

Courses.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses:
            state.authors.length === 0
                ? []
                : state.courses.map(course => {
                      return {
                          ...course,
                          authorName: state.authors.find(
                              a => a.id === course.authorId
                          ).name
                      };
                  }),
        authors: state.authors
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
