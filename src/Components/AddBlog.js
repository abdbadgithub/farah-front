import React,{useState} from "react"
import axios from 'axios'
import './styles/AddBlog.css'
function AddBlog() {
    const [Blogname,setBlogname] = useState()
    const[BlogContent,setBlogContent] = useState()
    const [file, setFile] = useState();
    const send = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('BlogContent',BlogContent)
        data.append('blogname',Blogname)
        data.append("file", file);
        console.log(data);
        
        axios
            .post(`http://localhost:8080/blog/add/1`, data)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
  return (
    <>
       <div className="container ">
            <form onSubmit={send}>
            <div className="Bloggrid-container">
            <div className="Bloggrid-1">
                <p style={{ fontSize: '20px' }} > Blog Title</p>
            </div>
            <div className="Bloggrid-2">
                <input type="text " id='Blogname' onChange={e => setBlogname(e.target.value)} name="Blogname" value={Blogname} style={{ color: 'black', border: '1px solid #ff1cd2', width: '400px', height: '40px' }} />
            </div>

            <div className="Bloggrid-3">
                <p style={{ fontSize: '20px' }} >Blog Icon</p>
            </div>

            <div className="Bloggrid-4">
                <input type="file"
                id="file"
                onChange={(event) => {
                    const file = event.target.files[0];
                    setFile(file);
                }} name="last" style={{ color: 'black', border: '1px solid #ff1cd2', width: '400px', height: '37px' }} />
            </div>

            <div className="Bloggrid-5">
                <p style={{ fontSize: '20px' }} > Blog Content</p>
            </div>
            <div className="Bloggrid-6">
                <textarea  id='BlogContent' onChange={e => setBlogContent(e.target.value)} name="BlogContent" value={BlogContent} style={{ color: 'black', border: '1px solid #ff1cd2', width: '400px', height: '40px' }} ></textarea>
            </div>
            <div className="Bloggrid-7">
                <input type="submit" className='btn' />
            </div>
            </div>
            </form>
        </div>
    </>
  )
}

export default AddBlog