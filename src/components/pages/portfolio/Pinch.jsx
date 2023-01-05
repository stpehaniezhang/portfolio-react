import React, { useEffect } from 'react';

function Pinch() {

  useEffect(() => {
    document.getElementById("works").className = 'navbar-links-active';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>pinch</div>
  )
}

export default Pinch