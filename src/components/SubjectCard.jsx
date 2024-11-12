import React from 'react';
import Quiz from './Quiz';

const SubjectCard = ({ subject }) => {
  return (
    <div className="card w-64 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto">
      <div className="card-body p-6">
        <h2 className="card-title text-xl mb-2">{subject.subjectName}</h2>
        <p className="text-sm text-gray-600 mb-4">{subject.description}</p>
        <div className="card-actions justify-start">
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => document.getElementById(`my_modal_${subject.subjectName}`).showModal()}
          >
            Take Quiz
          </button>
        </div>
      </div>

      <dialog id={`my_modal_${subject.subjectName}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <Quiz subjectName={subject.subjectName} />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SubjectCard;
