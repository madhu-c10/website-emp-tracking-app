import React, { useState } from 'react';


const Accordians = ({ answer, question }) => {

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <div onClick={toggleShow} className={`faq-item-div ${show ? "active" : ""}`}>
        <div className='faq-question'>
          {
            question
          }
        </div>
        <div className='faq-svg-div'>
          {
            show ?
              <svg className='show-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 14L12.0008 9.42L17 14" stroke="#1993C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 10L12.0008 14.58L17 10" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          }
        </div>
        <div className='faq-answer-div'>
          {
            answer
          }
        </div>
      </div>

    </div>
  )
}

const FeaturesFaq = () => {
  return (
    <div>
      <section className='features-faq-section'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='faq-header-div'>
                <span className='faq-header'>FAQ</span>
              </div>
            </div>
            <div className='col-lg-9'>
              {
                faqData.map((items) => {
                  return (
                    <Accordians key={items.id}
                      question={items.question}
                      answer={items.answer}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesFaq;

const faqData = [
  {
    id: 1,
    question: "1.Lorem ipsum is placeholder text commonly used in the graphic, print ?",
    answer: "  Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts and visual mockups. ."
  },
  {
    id: 2,
    question: "1.Lorem ipsum is placeholder text commonly used in the graphic, print ?",
    answer: "  Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts and visual mockups. ."
  },
  {
    id: 3,
    question: "1.Lorem ipsum is placeholder text commonly used in the graphic, print ?",
    answer: "  Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for previewing layouts and visual mockups. ."
  },
]
