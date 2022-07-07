export const dateReducerFn = (state, action) => {
    const isExpired = new Date(action.payload.date) - new Date() < 0
    if (isExpired)
        return { ...state, isExpired: true }

    const secondsInterval = (new Date(action.payload.date) - new Date()) / 1000;
    const days = Math.floor((secondsInterval) / (60 * 60 * 24))
    const hours = Math.floor((secondsInterval - days * 60 * 60 * 24) / (60 * 60))
    const minutes = Math.floor((secondsInterval - days * 60 * 60 * 24 - hours * 60 * 60) / 60)
    const seconds = Math.floor(secondsInterval - days * 60 * 60 * 24 - hours * 60 * 60 - minutes * 60)

    switch (action.type) {
        case 'DD':
            if (days <= 1 && (hours > 0 || minutes > 0 || seconds > 0))
                return { ...state, interval: minutes > 4 ? 'hours' : 'ending', string: `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}` };
            else if (days > 1 && days < 30)
                return { ...state, interval: 'days', string: `${days > 1 ? days + ' days ' : days + ' day'} ` }
            else if (days > 30 && days < 365)
                return { ...state, interval: 'months', string: `${Math.floor(days / 30)} months ` };
            else if (days > 365)
                return { ...state, interval: 'years', string: `${Math.floor(days / 365)} years ` };
            break;
        default:
            return new Date(action.payload.date)
    }
}


