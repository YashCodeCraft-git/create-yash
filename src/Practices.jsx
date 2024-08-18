export const Practices = () => {
    const students = [4]
    return (
        <>
            <p>{students.length === 0 && "No students found"}</p>
            <p>Number of students: {students.length}</p>
            
        </>
    );
};