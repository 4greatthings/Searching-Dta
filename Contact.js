
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Contact extends Component {
    constructor:
        const stars = [
            { name: 'Thompson', email: '200conceptz@gmail.com', phone: '323-902-7824', city: 'ATL->DEN->BER' },
            { name: 'Elan', email: ' ', phone: ' ', city: 'ASTN' },
            { name: '   ', email: ' ', phone: ' ', city: ' ' },
            { name: '   ', email: ' ', phone: ' ', city: '  ' },
            { name: '   ', email: ' ', phone: ' ', city: '  ' },
        ]

    for(let i = 0; i <rating; i++) {
    stars[i].filled = true
}

return <span className='Contact'>
    {stars.map((star, index) => <Star key={index} filled={star.filled} />)}
</span>
}

function Star({ filled }) {
    const library = filled ? 'fas' : 'far'
    return <FontAwesomeIcon className='blue' icon={[library, 'star']} />
}