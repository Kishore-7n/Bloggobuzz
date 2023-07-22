import React, { useState, useEffect } from "react";
import "../styles/Postpreview.css";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';


const ITEMS_PER_PAGE = 8;

function PostPreview() {
  const url = "http://localhost:5000/blog";
  const [data, setData] = useState([]);
  const [loading,setloading] = useState(false);
  const fetchInfo = async () => {
    return await fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() =>{
    setloading(true);
    setTimeout(()=>{
      setloading(false)
    },3000)
  },[])

  const [page, setPage] = useState(1);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedItems = data.slice(startIndex, endIndex);

  useEffect(()=>{
    window.scrollTo(0,0);
})

  return (
  <div className="blog">
    <h4>BLOGS</h4>
    {loading?(
    <BarLoader color="#36d7b7" 
    width="300px"
        className="bar"
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />):
      (<>
      <div className="card-container">
              {paginatedItems.map((d)=>{
              return(
                  <Card className="card" >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={d.image}
                    title={d.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {d.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {d.snippet}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small"><Link state={d} to='/mainpost' className="link">Learn More</Link></Button>
                  </CardActions>
                </Card>
              )}
              )}
               
        </div>
        <div className="page">
            <Pagination
            count={Math.ceil(data.length / ITEMS_PER_PAGE)}
            page={page}
            onChange={handleChangePage}
            color="primary"
             sx={{ marginTop: '40px',color:"white" }}
          />
        </div>
         </>
         )}
      </div>
  )}
export default PostPreview;
