import { useEffect, useState } from 'react'

export function ProgressBar (props) {
  const { stat, color } = props
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const statBase = (stat * 100) / 255
    setProgress(statBase)
  }, [])

  return (
    <>
      <div className='progress-bar-container'>
        <div className='progress-bar' style={{ width: `${progress}%`, backgroundColor: color }} />
      </div>
    </>
  )
}
