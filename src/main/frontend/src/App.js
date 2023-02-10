import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function App() {
   const [posts, setPosts] = useState(null)

    useEffect(() => {
        axios.get('/api/posts')
        .then(response => setPosts(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <Link to={"/savePosts"}
          state={{grade : 'cho'}}>
          <Button
            color="secondary"
            variant="contained">
            초급
          </Button>
        </Link>
    );
}

export default App;