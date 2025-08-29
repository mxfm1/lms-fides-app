'use client'

import { Button } from '@/components/ui/button'
import { testEndpoint } from '@/infraestructure/test'
import React from 'react'

const TestEndpoint = () => {

    const handleClick = async() => {
        const response = await testEndpoint()
        console.log("response endpoint",response)
    }
  return (
    <div>
        <Button onClick={handleClick}>Testtear</Button>
    </div>
  )
}

export default TestEndpoint