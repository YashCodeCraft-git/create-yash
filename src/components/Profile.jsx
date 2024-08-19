function Profile() {
    return (
    <div>
        <h1>Profile Card Challange</h1>
        <ProfileCard
            name='Yash'
            Age={23}
            greeting={
                <div>
                    <strong>Hi Yash, Have a wonderfull day!</strong>
                </div>
            }
        >
            <p>Hobbies: Coading, Travelling</p>
            <button>Contact</button>
        </ProfileCard>

        <ProfileCard
            name='Shubham'
            Age={27}
            greeting={
                <div>
                    <strong>Hi Shubahm, Have a wonderfull day!</strong>
                </div>
            }
        >
            <p>Hobbies: Riding, Travelling</p>
            <button>Contact</button>
        </ProfileCard>
    </div>
    );
};

export default Profile;

function ProfileCard({ name, age, greeting, children }) {
    // const { name, age, greeting, children } = props;
    return (<>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
    </>)
}