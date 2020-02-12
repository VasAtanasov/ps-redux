import React, { useState } from 'react';

const CoursesComponent = () => {
    const [course, setCourse] = useState({
        title: ''
    });

    const handleChange = event => {
        setCourse({ ...course, title: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input type="text" onChange={handleChange} value={course.title} />
            <input type="submit" value="Save" />
        </form>
    );
};

export default CoursesComponent;
