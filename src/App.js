import React, { useState } from 'react';
import images from './assets/images';
import Questions from './Questions';
import data from './data';

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main className="lg-container flex justify-center  mt-64 mb-28 lg:mt-20 ">
      <div className="bg-white rounded-lg p-1 max-w-md lg:max-w-5xl xl:max-w-7xl lg:grid lg:grid-cols-2  lg:text-left">
        <div className="relative ">
          <div className="overflow lg:h-full">
            <img
              className="absolute lg:relative -bottom-36 w-4/5 lg:w-full left-10  lg:top-16 lg:-left-14"
              src={images.bgDesktop}
              alt=""
            />
            <img
              className="absolute -top-32  left-10 w-4/5 lg:w-full lg:top-24 lg:-left-16"
              src={images.womenMobile}
              alt=""
            />
          </div>
        </div>

        <div className="mt-40 lg:my-16 lg:mr-40">
          <h1 className="text-4xl text-center lg:text-left font-bold lg:ml-4 mb-9">
            FAQ
          </h1>
          {questions.map((question) => {
            return <Questions key={question.id} {...question} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default App;
