import React, { useState } from 'react';
// import resume from '../assets/resume.pdf'
import resume from '../assets/Resume2023.pdf'

export default function Resume(){
  return(
    <>
      <object width='100%' height='800' data={resume} type='application/pdf' />
    </>
  )
}
 

