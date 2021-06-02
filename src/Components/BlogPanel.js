import React from "react"
import './styles/BlogPanel.css'
function BlogPanel() {
  return (
    
      <div className="container">
          <form>
              <div style={{ overflow: 'scroll', height: '500px'}}>
              <table>
                  <thead>
                      <tr id="headers">
                          <th style={{marginRight:'200px'}}>Title</th>
                          <th>Content</th>
                          <th>image</th>
                          <th>Update</th>
                          <th>Delete</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>
                                <input type="text" name="blogtitle" />
                          </td>
                          <td>
                                <textarea type="text" name="blogcontent" cols="50" style={{height:'50px',marginTop:'10px'}} ></textarea>
                          </td>
                          <td>  
                                <input type="text" name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className="btn btn-blog-update" value='Update' name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className='btn btn-blog-delete' value='Delete' name="blogimage" />
                          </td>
                      </tr>

                      <tr>
                          <td>
                                <input type="text" name="blogtitle" />
                          </td>
                          <td>
                                <textarea type="text" name="blogcontent" cols="50" style={{height:'50px',marginTop:'10px'}} ></textarea>
                          </td>
                          <td>  
                                <input type="text" name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className="btn btn-blog-update" value='Update' name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className='btn btn-blog-delete' value='Delete' name="blogimage" />
                          </td>
                      </tr>

                      <tr>
                          <td>
                                <input type="text" name="blogtitle" />
                          </td>
                          <td>
                                <textarea type="text" name="blogcontent" cols="50" style={{height:'50px',marginTop:'10px'}} ></textarea>
                          </td>
                          <td>  
                                <input type="text" name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className="btn btn-blog-update" value='Update' name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className='btn btn-blog-delete' value='Delete' name="blogimage" />
                          </td>
                      </tr>

                      <tr>
                          <td>
                                <input type="text" name="blogtitle" />
                          </td>
                          <td>
                                <textarea type="text" name="blogcontent" cols="50" style={{height:'50px',marginTop:'10px'}} ></textarea>
                          </td>
                          <td>  
                                <input type="text" name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className="btn btn-blog-update" value='Update' name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className='btn btn-blog-delete' value='Delete' name="blogimage" />
                          </td>
                      </tr>

                      <tr>
                          <td>
                                <input type="text" name="blogtitle" />
                          </td>
                          <td>
                                <textarea type="text" name="blogcontent" cols="50" style={{height:'50px',marginTop:'10px'}} ></textarea>
                          </td>
                          <td>  
                                <input type="text" name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className="btn btn-blog-update" value='Update' name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className='btn btn-blog-delete' value='Delete' name="blogimage" />
                          </td>
                      </tr>

                      <tr>
                          <td>
                                <input type="text" name="blogtitle" />
                          </td>
                          <td>
                                <textarea type="text" name="blogcontent" cols="50" style={{height:'50px',marginTop:'10px'}} ></textarea>
                          </td>
                          <td>  
                                <input type="text" name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className="btn btn-blog-update" value='Update' name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className='btn btn-blog-delete' value='Delete' name="blogimage" />
                          </td>
                      </tr>

                      <tr >
                          <td>
                                <input type="text" className="bloginput" name="blogtitle" />
                          </td>
                          <td>
                                <textarea type="text" name="blogcontent" cols="50" style={{height:'50px',marginTop:'10px'}} ></textarea>
                          </td>
                          <td>  
                                <input type="text" name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className="btn btn-blog-update" value='Update' name="blogimage" />
                          </td>
                          <td>
                                <input type="button" className='btn btn-blog-delete' value='Delete' name="blogimage" />
                          </td>
                      </tr>
                  </tbody>
              </table>
              </div>
          </form>
      </div>
    
  )
}

export default BlogPanel