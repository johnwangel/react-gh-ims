import {Size} from './helpers.js';
import {idata} from './inventory_data.js'

const pd=idata

const size=Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}

export function Profile(props) {
    const profileSty = {
        border: '1px solid black',
        padding: '25px 0 0'
    }

    const profSty = {
        ...FLEX_BASE,
    }

    const profInfo = {
        ...FLEX_BASE,
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '25px',
    }

    const gradeInfo = {
        ...profInfo,
        alignItems: 'center',
    }

    const profName = {
        fontWeight: 'bold',
        paddingBottom: '10px',
        fontSize: '24pt',
    }

    const grade = {
        fontSize: '36pt',
        color: 'red',
        padding: '15px 0',
        fontWeight: 'bold',
    }

    const addInfo = {
        ...FLEX_BASE,
        alignItems: 'flex-end',
        padding: '25px',

    }

    const addButton = {
        ...FLEX_BASE,
        justifyContent: 'center',
        backgroundColor: 'blue',
        color: 'white',
        width: '200px',
        height: '50px',
        cursor: 'pointer',
    }

    const heartSty = {
        fontSize: '36pt',
        cursor: 'pointer',
    }

    const revHd = {
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        padding: '20px 0',
    }

    const repLink = {
        textDecoration: 'underline',
        fontSize: '10pt',
    }

    return  <div style={profileSty}>
                <div style={profSty}>
                    <div style={profInfo}>
                        <div style={profName}>{pd.name}</div>
                        <div>{pd.role} of {pd.dept} at {pd.inst}</div>
                    </div>
                    <div style={gradeInfo}>Average Grade: <span style={grade}>{pd.avg}</span> based on {pd.count} reviews</div>
                </div>
                <div>
                    <h2 style={revHd}>Reviews:</h2>
                    {pd.reviews.map((rev,i)=><Review key={i} rev={rev} />)}
                </div>
                
                <div style={addInfo}>
                    <div style={heartSty}>&#9825;</div>
                    <div style={addButton} onClick={()=>props.changeView('rev4')}>Add Your Review</div>
                    <div style={repLink}>Report a Problem</div>
                </div>

            </div>
}

export function Review(props) {
    const revSty = {
        borderBottom: '1px solid black',
        padding: '25px 0 0',
    }

    const revInfo = {
        ...FLEX_BASE,
        padding: '25px',
    }

    const rating = {
        ...FLEX_BASE,
        justifyContent: 'flex-start',
    }

    const ratcont = {
        width: '40%',
    }

    const rathd = {
        width: '150px',
        textAlign: 'left',
    }

    const userSty = {
        ...FLEX_BASE,
        flexDirection: 'column',
        alignItems: 'flex-start',
    }

    const userNm = {
        fontWeight: 'bold',
        fontSize: '24pt',
        marginBottom: '10px',
        color: 'blue',
    }

    const userRating = {
        color: 'red',
    }

    const commentSty = {
        marginTop: '25px',
    }

    const commHd = {
        padding: '10px 0',
        backgroundColor: 'gray',
        color: 'white',
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        fontSize: '18pt',
        fontWeight: 'bold',
    }

    const commt = {
        backgroundColor: 'lightgray',
        padding: '25px',
    }

    return <div style={revSty}>
                <div style={revInfo}>
                    <div style={userSty}>
                        <div style={userNm}>{props.rev.username}</div>
                        <div>{props.rev.class}: {props.rev.classDesc}</div>
                        <div>{props.rev.date}</div>
                    </div>
                    <div style={ratcont}>
                        <div style={rating}><div style={rathd}>Clarity:</div><div style={userRating}>{props.rev.clarity}</div></div>
                        <div style={rating}><div style={rathd}>Materials:</div><div style={userRating}>{props.rev.materials}</div></div>
                        <div style={rating}><div style={rathd}>Methodology:</div><div style={userRating}>{props.rev.methodology}</div></div>
                        <div style={rating}><div style={rathd}>Fairness:</div><div style={userRating}>{props.rev.fairness}</div></div>
                        <div style={rating}><div style={rathd}>Difficulty:</div><div style={userRating}>{props.rev.difficulty}</div></div>
                    </div>
                </div>
                <div style={commentSty}>
                    <div style={commHd}>Comments</div>
                    <div style={commt}>{props.rev.comments}</div>
                </div>
            </div>
}
