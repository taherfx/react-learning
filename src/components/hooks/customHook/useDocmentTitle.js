import {useEffect} from 'react'

function useDocmentTitle(count) {
    useEffect(() => {
        document.title = `Count - ${count}`
    }, [count])
}

export default useDocmentTitle