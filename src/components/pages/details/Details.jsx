import './details.css'
import PersonIcon from '@material-ui/icons/Person';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../../context/Context';

export default function Details(){

    const [file,setFile] = useState(null);
    const [name,setName] = useState('');
    const {user} = useContext(Context);

    console.log(user);


    const handleProceed = async (e)=>{

        const updatedUser = {
            name,
        }

        e.preventDefault();

        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append('name',fileName);
            data.append('file',file);
            updatedUser.profilePic = fileName;
            try {
                await axios.post('/upload',data);
            } catch (error) {
            }
        }

        

    }

    return(

        <div className='details'>
            <form className='detailsForm' onSubmit={(e)=>handleProceed(e)}>
            <label className='imgInput' htmlFor='fileInput' >
                {/* <PersonIcon /> */}
            </label>
            <input type='file' id='fileInput' style={{display: 'none'}} onChange={(e)=>{setFile(e.target.files[0])}} />
            <input type='text' className='name' placeholder='Please enter your name' onChange={(e)=>setName(e.target.value)}></input>
            <button type="submit" class="submit-button btn btn-success">Proceed</button>
            </form>
        </div>

// 

    )

}