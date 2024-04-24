import React, { useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFiretore'

export const TransactionForm = ({ uid }) => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    const { addDocument, response } = useFirestore('transactionList');


    const handleSubmit = (e) => {
        e.preventDefault();
        addDocument({ uid, name, amount })
    };

    useEffect(() => {
    console.log('response transactionForm: ', response);
        if (response.success) {
            setName('')
            setAmount('')
        }
    }, [response])


    return (
        <>
            <h3>Add a Transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Transaction name: </span>
                    <input type="text" required onChange={(e) => setName(e.target.value)} value={name} />
                </label>
                <label>
                    <span>Amount: </span>
                    <input type="number" required onChange={(e) => setAmount(e.target.value)} value={amount} />
                </label>
                <button>Add Transaction</button>
            </form>
        </>
    )
}


