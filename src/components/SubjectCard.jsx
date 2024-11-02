import React from 'react'

const SubjectCard = ({ subjectName, description, questions }) => {
    return (
        <div className='w-[300px] border-2 border-slate-300 text-slate-900 h-fit p-4 rounded-xl transition-all ease-linear delay-150 hover:scale-105 duration-300 drop-shadow-2xl'>
          <h2 className="text-[24px]">{subjectName}</h2>
          <p className=''>{description}</p>
          <button className="btn btn-primary mt-2" onClick={() => document.getElementById('my_modal_4').showModal()}>Take Quiz</button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-slate-100">
                    <h3 className="font-bold text-lg">Let's start the quiz</h3>
                    <p className="py-4">Click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default SubjectCard
