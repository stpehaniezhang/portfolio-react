import React from 'react'
import '../WorkDetails.css'

function PortfolioTasks(props) {

    const task = props.tasktitle;

  return (
    <>
          <div className='work-wrapper'>
            <p className='small-header'>during my time there...</p>
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
                        <p className='text-desc blue'>{props.tasktitle[i]}</p>
                        <p className='project-desc blue'>{props.taskdesc[i]}</p>
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