import React from 'react'
import WorkSection from '../works/WorkSection'
import {Helmet} from 'react-helmet';

function works() {
  return (
    <>
    <Helmet>
        <title>Stephanie Zhang | Works</title>
    </Helmet>
    <WorkSection/>
    </>
  )
}

export default works