import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { connect } from 'react-redux';
// import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));
//setup note state
class StockBikeForm extends React.Component {
    constructor(props) {
        super(props);

       // console.log(props);
        this.state = {
            models:[],
            modelsArray:[],
            yearsArray:[],
            description: props.bike ?  props.bike.description : '',
            make: props.bike ? props.bike.make : "",
            model: props.bike ? props.bike.model : "",
            year: props.bike ? props.bike.year : "",
            note: props.bike ? props.bike.note : '',
            // amount:props.bike ? (props.bike.amount / 100).toString() : '',
            createdAt: props.bike ? moment(props.bike.createdAt) : moment(),
            calendarFocused: false,
            projects: props.bike ? props.bike.projects : [],
            error: ''
        };
    }

    
    onMakeChange = (e) => {
        const make = e.target.value;
        console.log('the current value of the section is', make)
        this.setState(() => ({make}))
    }

    onModelChange = (e) => {
        const model = e.target.value;
        this.setState(() => ({model}))
    }

    onYearChange = (e) => {
        const year = e.target.value;
        this.setState(() => ({year}))
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=> ({note}))
    }
    // onAmountChange = (e) => {
    //     const amount = e.target.value;
    //     if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
    //         this.setState(()=>({amount}));
    //     }
    // }
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
        if(!this.state.make || !this.state.model || !this.state.year){
            //Set error state = 'Please provide description and amount'
           this.setState(() =>({error: 'Please provide make, model, and year'}))
        } else {
            //Clear the console.error();
            this.setState(()=>({error:''}))
            this.props.onSubmit(({
                make:this.state.make,
                model:this.state.model,
                year:this.state.year,
                description:this.state.description,
                // amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
                projects: this.state.projects
            }))
            console.log('submitted')
        }
    }

    getMakesFromArray = (obj) =>{
        let newModelsArray = [];
        let modelsArray = Object.entries(obj);
        modelsArray.forEach(([key, value]) =>{
            newModelsArray.push({
                key,
                value
            })
            
        })
 console.log(newModelsArray);
        return newModelsArray;
       
    }

    getTest = (str) => console.log(str)

    render() {
        return (
          
                // <form className='form' onSubmit={this.onSubmit}>
                // {this.state.error && <p className='form__error'>{this.state.error}</p>}
                //     <input className='text-input'
                //     type="text"
                //     placeholder="Description"
                //     autoFocus
                //     value ={this.state.description}
                //     onChange={this.onDescriptionChange}
                //     />
                //     <input
                //     type="text" className='text-input'
                //     placeholder="Amount"
                //     value={this.state.amount}
                //     onChange={this.onAmountChange}
                //     />
                //     <SingleDatePicker 
                //     date ={this.state.createdAt}
                //     onDateChange={this.onDateChange}
                //     focused ={this.state.calendarFocused}
                //     onFocusChange={this.onFocusChange}
                //     numberOfMonths={1}
                //     isOutsideRange = {() => false}
                //     />
                //     <textarea className='textarea'
                //     placeholder="Add a note for your bike"
                //     value={this.state.note}
                //     onChange={this.onNoteChange} />
                //     <div> <button className='button'>Save Bike</button></div>
                // </form>

                <form className='form' onSubmit={this.onSubmit}>

                    {this.state.error && <p className='form__error'>{this.state.error}</p>}

                    {'need to put in the params, checks, years, etc...'}

                </form>
                
                //Add an image
                
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        stockBikes: state.stock
    }
};

export default connect(mapStateToProps)(StockBikeForm);