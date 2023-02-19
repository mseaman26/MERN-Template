import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_USERS } from '../utils/queries';

const Home = () => {
const { loading, data } = useQuery(QUERY_USERS)
const users = data?.users || []

return (
    <div>
       {loading ? (
        <div>
            loading... : ()
        </div>
       ) : (
        users.map((user) => (
            <div>

                <h1>
                    {user.username}
                </h1>
                <h1>
                    {user.email}
                </h1>
            </div>
        ))
       )}
    </div>
)
}
export default Home