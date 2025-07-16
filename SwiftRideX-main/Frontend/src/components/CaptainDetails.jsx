import React from 'react'
import { Link } from 'react-router-dom'
import RideSwiftLogo from '../Images/SwiftRideX.png'
import map from '../Images/map.gif'

const CaptainDetails = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-5">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdbcit8sy3LV4h77d-YiU1TxqyaE3dOHH-g&s"
            />
            <h4 className="text-lg font-medium">Sweety</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹ 295.2</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start">
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-timer-2-line" />
            <h5 className="text-xl font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-speed-up-line" />
            <h5 className="text-xl font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-thin ri-booklet-line" />
            <h5 className="text-xl font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails