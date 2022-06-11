import React,{useEffect, useState} from 'react'

import axios from 'axios'

import './stt.css'
const UserInfoPage = () => {
    const [statement, setStatement] = useState([])

    async function fetchData(){
        const result = await axios.get('/api/v1/users/statement')
        return result.data.statement   
    }

    useEffect(() => {
        fetchData().then(x => {
            setStatement(x)
        })
    }, [])

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Transaction Type</th>
                    <th>Transaction Amount</th>
                    <th>Transaction At</th>
                </tr>
                </thead>
                {
                    statement.map((el) => {
                        return(
                            <tbody key={el._id}>
                                <tr >
                                    <td>{el.tranxType}</td>
                                    <td>{el.tranxAmount}</td>
                                    <td>{new Date(el.tranxAt).toLocaleString("en-US")}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default UserInfoPage