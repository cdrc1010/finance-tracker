import { useEffect, useState, useRef } from "react"
import { projectFirestore } from "../firebaseConfig/config"

export const useCollection = (collection, _query, _orderBy) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    const query = useRef(_query).current
    const orderBy = useRef(_orderBy).current

    useEffect(() => {
        let ref = projectFirestore.collection(collection)

        //if we don't use a ref --> infinite loop in useEffect
        // _query is an array and is "different" on every function call
        if (query) {
            ref = ref.where(...query)
        }
        if(orderBy){
            ref = ref.orderBy(...orderBy)
        }

        const unsubscribe = ref.onSnapshot((snapshot) => {

            let results = []
            snapshot.docs.map((doc) => {
                return results.push({ ...doc.data(), id: doc.id })
            })
            setDocuments(results)
            setError(null)
        }, (error => {
            console.log(error)
            setError('could not fetch the data: ', error.message)
        }))

        //unsubscribe on unmount
        return () => unsubscribe()

    }, [collection, query])

    return { documents, error }
}

