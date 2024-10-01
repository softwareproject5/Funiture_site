import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {
 
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Table"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", data.image);
        const response = await axios.post(`${url}/api/`,formData) //endpoint where we upload the product
    if(response.data.success){
        setData({
            name: "",
            description: "",
            price: "",
            category: "Table"
        })
        setImage(false)
        toast.success(response.data.message) //display message when item added successfully
    }
    else{
toast.error(response.data.message) //display message when item not added successfully
    }
    }


    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload Image :</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload} alt='upload' />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
                </div>

                <div className='add-img-upload flex-col'>
                    <p>Upload 3D Image :</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload} alt='upload' />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
                </div>

                <div className='add-product-name flex-col'>
                    <p>Product Name :</p>
                    <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type your item name here' required />
                </div>

                <div className='add-product-description flex-col'>
                    <p>Product Description :</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder="Type your item description here" required></textarea>
                </div>

                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product Category :</p>
                        <select onChange={onChangeHandler} name='category'>
                            <option value="Table">Table</option>
                            <option value="Chair">Chair</option>
                            <option value="Vas">Vas</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price :</p>
                        <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder='Amount' /> <span className="currency-label">LKR</span>
                    </div>
                </div>

                <button type='submit' className='add-btn'>Add Item</button>
            </form>
        </div>
    );
};

export default Add;
