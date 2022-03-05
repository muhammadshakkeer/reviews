import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0)
  //below :- people [] ,not () beacuse -> {people is an array}
  const {id,name,job,image,text} = people[index]
  
  // func :- if index going benyond the 3d index (index = 3 length = 4) it will be 0 or 
  // func :- if index going to lessthan (> 0 ) it will be 3
  // so that here is checking number 
  // console.log('length :- ', People.length - 1)
  const checkNumber = (number) => {
    // people.length = index position 
    // people.length - 1 = 3d index (logic in here) (index = 3)
    if (number > people.length - 1 ){
        return 0;
    }
    if (number < 0 ) {
      // if (number < 0 ) setIndex( 3 )
      return people.length - 1
    }
    console.log("Number : ",number)
    return number
  }
    // next function
  const nextPerson = () => {
    setIndex((index) => {
        const newIndex = index + 1
        return checkNumber(newIndex)
    })
  }
  // prev function
  const prevPerson = () => {
    setIndex((index)=> {
        const newIndex = index - 1    
        return checkNumber(newIndex)
    })
  }
  const randomPerson=()=>{
    // eg:- 3.43535353 -> 3
    let randomNumber = Math.floor(Math.random() * people.length)

    // 1st METHOD
    // const togglePerson = Math.floor(randomNumber)
    // setIndex(togglePerson)

    // 2st METHOD
    
      if(randomNumber === index){
        console.log('index' , index);
        console.log(randomNumber === index);
        randomNumber = index + 1
        console.log("random number === index : ",randomNumber);
      }
      setIndex(checkNumber(randomNumber))
    
    console.log(randomNumber);
  }

  return <article className='review'>
        <div className="img-container">
          <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'>
              <FaQuoteRight/>
            </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

       <div className="btn-container">
       <button className="prev-btn" onClick={prevPerson} >
          <FaChevronLeft/>
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight/>
        </button>
       </div>
        <button className="random-btn" onClick={randomPerson}>
          suprise me
        </button>

  </article>;
};

export default Review;
