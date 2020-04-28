import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { connect } from 'react-redux';
// import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));
//setup note state
class ProjectForm extends React.Component {
    constructor(props) {
        super(props);

        console.log("my props", props);
        this.state = {
            description: props.project ?  props.project.description : '',
            category: props.project ? props.project.category : "",
            note: props.project ? props.project.note : '',
            createdAt: props.bike ? moment(props.bike.createdAt) : moment(),
            calendarFocused: false,
            id: props.project ? props.project.id : '',
            error: ''
        };

    
    }

   categories = ['Misc.', 'Body & Frame', 'Control & Brake','Electrical', 'Engine & Exhaust', 'Fuel & Air', 'Suspension', 'Wheels & Tires']


    onDescriptionChange = (e) => {
        console.log(e.target.value)
        const description = e.target.value;
        this.setState(() => ({description}))
    }

    onCategoryChange = (e) => {
        const category = e.target.value;
        console.log('the current value of the section is', category)
        this.setState(() => ({category}))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=> ({note}))
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(()=>({createdAt}));
        }
    }
    onFocusChange = ({focused}) =>{
        this.setState(()=>({
            calendarFocused:focused
        }))
    }

    onAddThumbnailImg = () => {
        console.log(`let's pick a thumbnail image`);
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description){
            //Set error state = 'Please provide description and amount'
           this.setState(() =>({error: 'Please provide name and category'}))
        } else {
            //Clear the console.error();
            console.log('My description before send', this.state.description)
            this.setState(()=>({error:''}))
            this.props.onSubmit(({
                description:this.state.description,
                category:this.state.category,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
                id: this.state.id
            }))
            console.log('submitted')
        }
    }

    getTest = (str) => console.log(str)

    render() {
        return (
                <form className='form' onSubmit={this.onSubmit}>

                    {this.state.error && <p className='form__error'>{this.state.error}</p>}

                    <input className='text-input'
                    type="text"
                    placeholder="Name your project"
                    autoFocus
                    value ={this.state.description}
                    onChange={this.onDescriptionChange}
                    />

                    <select className='text-input'
                        placeholder="Category"
                        value ={this.state.category}
                        onChange={this.onCategoryChange}
                        >
                            {this.categories.map((category, index)=>{
                                return <option key={index}>{category}</option>
                            })}
                    </select>

                    <div className='thumbnail-container'>
                        <div> <button className='button' onClick={this.onAddThumbnailImg}>Add a Thumbnail</button></div>
                        <div className='thumbnail-select'><img src="" alt="" /></div>
                    </div>
                    {/* NEW STUFF ABOVE */}
                    
                    {/* <input
                    type="text" className='text-input'
                    placeholder="Amount" 
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    /> */}
                    <SingleDatePicker 
                    date ={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused ={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange = {() => false}
                    />
                    <textarea className='textarea'
                    placeholder="Add a note for your project"
                    value={this.state.note}
                    onChange={this.onNoteChange} />
                    <div> <button className='button'>Save Project</button></div>

                </form>
                //Add an image
        )
    }

}

const mapStateToProps = (state) => {
    console.log('my state', state)
    return {
        stockBikes: state.stock,
    }
   
};

export default connect(mapStateToProps)(ProjectForm);