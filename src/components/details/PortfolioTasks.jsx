import React from 'react'
import '../WorkDetails.css'

function PortfolioTasks(props) {

    const task = props.tasktitle;

  return (
    <>
          <div className='work-wrapper'>
            <p className='small-header'>what i have done</p>
                <div className='task-container'>
              {(() => {
                const arr = [];
                var i = 0;
                while (i !== task.length) {
                  arr.push(
                    <div className='task-item'>
                        <div className='task-number-container bottom-margin'>
                            <p className='task-number'>0{i + 1}</p>
                        </div>
                        <p className='text-desc'>{props.tasktitle[i]}</p>
                        <p className='project-desc'>{props.taskdesc[i]}</p>
                    </div>
                  );
                  i++;
              }
              return arr;
            })()}
            </div>
        </div>
        <hr></hr>
    </>
  );
}

export default PortfolioTasks