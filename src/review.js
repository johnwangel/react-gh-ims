import React, { useState } from 'react';
import Button from './button.js'
import {Size} from './helpers.js';

const size=Size()

const FLEX_BASE ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}

export function Review1(props) {
    return  <div>
                <ReviewForm step="School" number='1' value='NJIT' changeView={props.changeView} />
                <Button text='Next' next='rev2' changeView={props.changeView} />
                <Step first="1" last="5" />
            </div>
}

export function Review2(props) {
    return  <div>
                <ReviewForm step="Professor" number='2' value='Lynette Fromme, History' changeView={props.changeView} />
                <Button text='Next' next='rev3' changeView={props.changeView} />
                <Step first="2" last="5" />
            </div>
}

export function Review3(props) {
    return  <div>
                <ReviewForm step="Class" number='3' value='History 203 - Colonial America' changeView={props.changeView} />
                <Button text='Next' next='rev4' changeView={props.changeView} />
                <Step first="3" last="5" />
            </div>
}

export function Review4(props) {
    const categories = ['Clarity','Materials','Methodology','Fairness']
    const rowSty={
        ...FLEX_BASE,
        flexDirection: 'column',
        marginBottom: '25px',
    }
    return  <div>
                <h1>Grade Your Teacher</h1>
                <div style={rowSty}>{categories.map( (item,index)=><Grades key={index} label={item} name={`grade${index}`}/>)}</div>
                <Button text='Next' next='rev5' changeView={props.changeView} />
                <Step first="4" last="5" />
            </div>
}

export function Review5(props) {
    const textStyle = {
        width: (size.width<600) ? '200px' : '400px',
        height: '150px',
        padding: '15px',
        fontSize: '12pt',
    }

    const belowSty = {
        marginBottom: '25px'
    }

    return  <div>
                <h1>Add Comments (optional)</h1>
                <div style={belowSty}>
                    <textarea style={textStyle}></textarea>
                </div>
                <Button text='Finish' next='thanks' changeView={props.changeView} />
                <Step first="5" last="5" />
            </div>
}

export function ReviewForm(props){
    const [showView,changeView] = useState(1);
    const revSty={
        ...FLEX_BASE,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50px',
    }

    const rowSty = {
        ...FLEX_BASE,
        justifyContent: 'center',
        width: '100%',
        marginBottom: '10px',
        marginTop: '25px',
    }

    const headSty = {
        fontWeight: 'bold',
        marginRight: '8px',
    }

    const inputSty = {
        width: '173px',
        height: '20px',
    }
    const selectSty = {
        width: '200px',
        height: '25px',
        padding: '3px',
    }

    const searchSty = {
        marginLeft: '5px'
    }

    const optSty = {
        ...FLEX_BASE
    }

    const optWidth = {
        marginRight: '20px',
    }

    return <div style={revSty}>
            <h1>{props.step}</h1>
            <div style={optSty}>
                <div style={optWidth}><input onClick={()=>changeView(1)} checked={(showView===1)?true:false} name={`${props.step}${props.number}`} type='radio'/>Select a {props.step}</div>
                <div style={optWidth}><input onClick={()=>changeView(2)} checked={(showView===2)?true:false} name={`${props.step}${props.number}`} type='radio'/>Search for a {props.step}</div>
                <div style={optWidth}><input onClick={()=>changeView(3)} checked={(showView===3)?true:false} name={`${props.step}${props.number}`} type='radio'/>Add a {props.step}</div>
            </div>

            {(showView===1)
                ?  <div style={rowSty}><select style={selectSty}><option>{props.value}</option></select></div>
                :null
            }

            {(showView===2)
                ? <div style={rowSty}>
                        <div style={FLEX_BASE}>
                            <input style={inputSty} type='text'></input>
                            <div style={searchSty}>&#x1f50d;</div>
                        </div>
                    </div>
                :null
            }

            {(showView===3)
                ?  <div style={rowSty}><Button text={`Add ${props.step}`} next="" changeView={''} /></div>
                : null
            }
            
        </div>

}

export function Grades(props){
    const rowSty={
        ...FLEX_BASE,
        flexDirection: (size.width<600) ? 'column' : 'row',
        width: (size.width<600) ? '80%' : '50%',
        marginBottom: (size.width<600) ? '15px' : '0',
    }
    const gradeSty={
        ...FLEX_BASE,
        width:  (size.width<600) ? 'unset' : '150px',
    }
    return  <div style={rowSty}>
                <div>{props.label}</div>
                <div style={gradeSty}>
                    <div><input name={props.name} type='radio'/>A</div>
                    <div><input name={props.name} type='radio'/>B</div>
                    <div><input name={props.name} type='radio'/>C</div>
                    <div><input name={props.name} type='radio'/>F</div>
                </div>
            </div>
}

export function Step(props){
    const stepSty = {
        fontSize: '12pt',
        marginTop: '25px',
        fontWeight: 'bold',
    }
    return <div style={stepSty}>Step {props.first} of {props.last}</div>
}