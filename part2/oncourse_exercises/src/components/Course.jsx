const Course = ({course}) => {
    console.log('course', course)
    const parts = course.parts
    const total = parts.reduce((sum, part) => sum + part.exercises, 0); 
    console.log('parts', parts)
    return (
        <div>
        <h1>{course.name}</h1>
        <div>
            {course.parts.map(part => (
            <p key={part.id}>
                {part.name} {part.exercises}
            </p>
            ))}
        </div>
        <p><strong>Total of {total} exercises</strong></p>
        </div>
    );
    };

export default Course