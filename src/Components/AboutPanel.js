import React, { useState, useEffect } from "react"
import axios from 'axios'

function AboutPanel() {
  const [data, setdata] = useState({});
  const request = async () => {
    await axios
      .get("http://localhost:8080/about/getabout/1")
      .then((response) => {
        setdata(response.data.result[0]);
      });
  };
  useEffect(() => {
    request();
  }, []);

  const onTodoChange = (value) => {
    setdata({
      name: value
    });
  }

  const updateProfile = async (first, last, img, dobirth, address1, phone1, email1, quote1, bio1, id1) => {
    await axios.post(`http://localhost:8080/about/update/${id1}`, {
      'firstname': first,
      'lastname': last,
      'image': img,
      'dob': dobirth,
      'address': address1,
      'phone': phone1,
      'email': email1,
      'quote': quote1,
      'bio': bio1,

    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const firstname = form.name.value
    const lastname = form.last.value
    const bio = form.bio.value
    const quote = form.quote.value
    const dob = '1998'
    const address = form.address.value
    const phone = form.phone.value
    const email = 'email'
    const image = 'image'
    const id = '1'
    updateProfile(firstname, lastname, image, dob, address, phone, email, quote, bio, id);
    alert('Update successful')
}
  return (
    <div className="container">
      <form className="form-1" onSubmit={onSubmit}>
        <div className="grid-container-1 bg-white">
          <div className="grid-1">
            <p style={{ fontSize: '20px' }}>Name</p>
          </div>
          <div className="grid-2">
            <input type="text table-name" onChange={e => onTodoChange(e.target.value)} name="name" value={data.first_name} style={{ color: 'black', border: '1px solid #ff1cd2', width: '400px', height: '40px' }} />
          </div>

          <div className="grid-3">
            <p style={{ fontSize: '20px' }} >Last Name</p>
          </div>

          <div className="grid-4">
            <input type="text table-name" onChange={e => onTodoChange(e.target.value)} name="last" value={data.last_name} style={{ color: 'black', border: '1px solid #ff1cd2', width: '400px', height: '40px' }} />
          </div>
          <div className="grid-5">
            <p style={{ fontSize: '20px' }} >Bio</p>
          </div>

          <div className="grid-6">
            <input type="text table-bio" onChange={e => onTodoChange(e.target.value)} name="bio" value={data.bio} style={{ color: 'black', border: '1px solid #ff1cd2', width: '400px', height: '40px' }} />
          </div>

          <div className="grid-7">
            <p style={{ fontSize: '20px' }} >Address</p>
          </div>

          <div className="grid-8">
            <input type="text table-bio" onChange={e => onTodoChange(e.target.value)} name="address" value={data.address} style={{ color: 'black', border: '1px solid #ff1cd2', width: '400px', height: '40px' }} />
          </div>

          <div className="grid-9">
            <p style={{ fontSize: '20px' }} >Phone number</p>
          </div>

          <div className="grid-10">
            <input type="text table-bio" onChange={e => onTodoChange(e.target.value)} name="phone" value={data.phone} style={{ color: 'black', border: '1px solid #ff1cd2', width: '400px', height: '40px' }} />
          </div>

          <div className="grid-11">
            <p style={{ fontSize: '20px' }}>Quote</p>
          </div>

          <div className="grid-12">
            <textarea  name="quote" onChange={e => onTodoChange(e.target.value)} value={data.favorite_quote} id="txtarea1" cols="52" rows="5" style={{ backgroundColor: 'white', borderColor: '#ff1cd2' }}></textarea>
          </div>

          <div className="grid-13">
            <input type="submit" value="update" className="btn" style={{ border: '1px solid #ff1cd2', width: "200px" }} />
          </div>


        </div>
      </form>
    </div>
  )
}

export default AboutPanel