import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';
import { Box } from '@mui/material';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import {Grid} from '@mui/material';
import '../styles/Form.css'

export default function Form() {
    useEffect(()=>{
        window.scrollTo(0,0);
    })


    const navigate = useNavigate();
    // eslint-disable-next-line
    const[title,setTitle] = useState('')
    // eslint-disable-next-line
    const[snippet,setsnippet] = useState('')
    // eslint-disable-next-line
    const[author,setauthor] = useState('')
    // eslint-disable-next-line
    const[Description,setDescription] = useState('')
    // eslint-disable-next-line
    const[loading,setloading] = useState(true)
    const [image, setImage] = useState('');

    useEffect(()=> {
        setloading(true)
        setTimeout(()=>{
        setloading(false)
        },2000) 
    },[])

    const handleloading = () => {
            setloading(true)
            setTimeout(()=>{
            setloading(false)
            },2000)
    }
    const converttobase = (e) =>{

            var reader = new FileReader()
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = ()=>{
                setImage(reader.result)
            }
    }
    const handlesubmit =  async(event) => {
        event.preventDefault();
        const blogdata = await fetch('https://blog-lhix.onrender.com/create',{
            method:'post',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "title":event.target.title.value,
                "snippet":event.target.snippet.value,
                "author":event.target.author.value,
                "Description":event.target.Description.value,
                "image":image,
        })
    })

    if(blogdata.ok)
    {
        setTitle('')
        setsnippet('')
        setauthor('')
        setDescription('')
        setImage('')
        handleloading()
        navigate('/blog')
    }
}

const reset = () => {

    setTitle('')
    setsnippet('')
    setauthor('')
    setDescription('')
    setImage('')

}
    return (
            <>
            {loading?(<>
                <FadeLoader
                color="#36d7b7" 
                width={7}
                height={40}
                radius={2}
                margin={20}
                className='loader'
                loading={loading}
                size={0}
                aria-label="Loading Spinner"
                data-testid="loader"/>
            </>):(
                <div className='form-div'>
                    <h5>CREATE YOUR  <br></br> THOUGHTS <br></br> INTO A BLOG . . .</h5>
                    <form   onSubmit={handlesubmit} className="form" encType="multipart/form-data" action='/upload' method='POST'>
                    <Grid className='form-grid'>
                    <Box marginBottom={2} className="form-container">
                        <TextField
                        className="name"
                        label="Title"
                        name="title"
                        autoSave='off'
                        autoComplete='off'
                        required
                        onChange={(e)=>setTitle(e.target.value)}
                        variant='filled'
                        InputProps={{ disableUnderline: true, style: {
                            borderRadius: "10px",
                          } }}
                        
                        // sx={{
                        //     "& fieldset": { border: 'none',backgroundColor:'grey' },
                        //   }}
                        />
                    </Box>
                    <Box marginBottom={2}>
                        <TextField
                            className="name"
                            label="Snippet"
                            name="snippet"
                            autoSave='off'
                            autoComplete='off'
                            required
                            variant='filled'
                            onChange={(e)=>setsnippet(e.target.value)}
                            InputProps={{ disableUnderline: true,
                                style: {
                                    borderRadius: "10px",
                                  } }}
                        />
                    </Box>
                    <Box marginBottom={2}>
                        <TextField
                        className="name"
                            label="Author"
                            name="author"
                            autoSave='off'
                            autoComplete='off'
                            required
                            variant='filled'
                            onChange={(e)=>setauthor(e.target.value)}
                            InputProps={{ disableUnderline: true,
                                style: {
                                    borderRadius: "10px",
                                  } }}
                            
                        />
                    </Box>
                    <Box marginBottom={2}>
                        <TextField
                            className="name"
                            label="Description"
                            name="Description"
                            autoSave='off'
                            autoComplete='off'
                            required
                            variant='filled'
                            onChange={(e)=>setDescription(e.target.value)}
                            InputProps={{ disableUnderline: true,
                                style: {
                                    borderRadius: "10px",
                                  } }}
                        />
                    </Box>
                    <Box marginBottom={2}>
                    <TextField
                            className="name"
                            label="Image"
                            name="image"
                            type='file'
                            accept='image/*'
                            InputLabelProps={{ shrink:true }}
                            autoSave='off'
                            autoComplete='off'
                            onChange={e=>converttobase(e)}
                            InputProps={{ disableUnderline: true,
                                style: {
                                    borderRadius: "10px",
                                  } }}
                            required
                            variant='filled'
                        />
                    </Box>
                    <Box marginBottom={2} >
                        <Button variant='contained' fullWidth type='submit'>CREATE POST</Button>
                    </Box>
                    <Box marginBottom={2}>
                        <Button variant='contained' fullWidth color='error' onClick={reset} type='reset' >CANCEL</Button>
                    </Box>
                </Grid>
            </form>
        </div>
            )}
        </>                  
    )
}

