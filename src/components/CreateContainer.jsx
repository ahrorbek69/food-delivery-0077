import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {MdAttachMoney,MdFoodBank,MdDelete, MdFastfood, MdCloudUpload } from 'react-icons/md'
import { categories } from '../utils/data'
import Loader from './Loader'
import {getDownloadURL, ref,uploadBytesResumable} from 'firebase/storage'

const CreateContainer = () => {

  const [title, setTitle] = useState('')
  const [calories, setCalories] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState(null)
  const [imageAssets, setImageAssets] = useState(null)
  const [fields, setFildes] = useState(false)
  const [alertStatus, setAlertStatus] = useState('danger')
  const [msg, setMsg] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  const saveDeteils = () => { }
  const uploadImage = (e) => { 
    setIsLoading(true)
    const imageFile = e.target.files[0]
    const storageRef = ref(Storage, `Image/${Date.now()}-${imageFile.name}`)
    const uploadTask = uploadBytesResumable(storageRef,imageFile)

    uploadTask.on('state_change', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    } ,(error) => {
      console.log(error);
      setFildes(true)
      setMsg('Error while uploading : Try Again ')
      setAlertStatus('danger')
      setTimeout(() => {
        setFildes(false)
        setIsLoading(false)
      }, 4000);
    } ,() => {
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        setImageAssets(downloadURL)
        setIsLoading(false)
        setFildes(true)
        setMsg('Imgage uploaded successfully')
        setAlertStatus('success')
        setTimeout(() => {
          setFildes(false)
        }, 4000);
      })
    })

    console.log(imageFile);
   }
  const deleteImage = () => { }


  return (
    <motion.div

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      className='w-full min-h-screen flex items-center justify-center h-auto'>
      <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
        {
          fields && (
            < motion.p

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}

              className={` text-lg  font-semibold w-full p-2 rounded-lg text-center ${alertStatus === 'danger' ? "bg-red-400" : 'bg-emerald-800'}`}>
              {
                msg
              }
            </ motion.p>
          )
        }


        <div className=" py-2 border-b border-gray-300 flex  items-center  gap-2  w-full">
          <MdFastfood className='text-xl text-gray-700' />
          <input type="text"
            required
            value={title}
            placeholder='Give me a title...'
            className='w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-textColor'

            onChange={e => setTitle(e.target.value)}

          />
        </div>


        <div className="w-full">
          <select className=' outline-none  w-full text-base border-b bg-gray-200 p-2 rounded-md cursor-pointer' onChange={e => setCategory(e.target.value)}>
            <option value="other" className=' text-base border-0 outline-none capitalize text-headingColor bg-white'>
              Select Category
            </option>
            {
              categories && categories.map((item, inx) => (
                <option key={inx} value={item.imgUrl} className=' text-base border-0 outline-none capitalize text-headingColor bg-white'>
                  {item.name}
                </option>
              ))
            }
          </select>
        </div>

        <div className="group flex justify-center items-center flex-col border-2 border-dotted bg-gray-200 w-full h-225 md:h-420 cursor-pointer rounded-lg ">
          {
            isLoading ? <Loader /> : <>
              {!imageAssets ? (<>
                <label className=' w-full h-full flex items-center justify-center cursor-pointer'>
                  <div className=' w-full h-full flex flex-col items-center justify-center gap-2'>
                    <MdCloudUpload className=' text-gray-500 text-3xl hover:text-gray-700' />
                    <p className=' text-gray-500 hover:text-gray-700'>Click here to upload</p>
                  </div>


                  <input type="file" name='uploadImage' accept='image/*' onChange={uploadImage}
                  className='w-0 h-0'
                  />


                </label>
              </>) : (<>
              <div className="relative h-full">
                <img className=' w-full h-full object-cover' src={imageAssets} alt="uploadImg" />
                <button type='button'
                onClick={deleteImage}
                className=' absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out'>
                  <MdDelete className=' text-white' />
                </button>

              </div>
              </>)}
            </>
          }
        </div>


          <div className=" flex flex-col md:flex-row items-center gap-3 w-full">
            <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
              <MdFoodBank className=' text-gray-700 text-2xl'/>
              <input type="text"
              required
              value={calories}
              onChange={e => setCalories(e.target.value)}

              placeholder='Calories'
              className=' w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
              />
            </div>



            <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
              <MdAttachMoney className=' text-gray-700 text-2xl'/>
              <input type="text"
              required
              value={price}
              onChange={e => setPrice(e.target.value)}

              placeholder='Calories'
              className=' w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
              />
            </div>
          </div>

          <div className="flex items-center w-full">
            <button type='button'
            className=' ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold'
            onClick={saveDeteils}
            

            >
                Save
            </button>
          </div>

      </div>
    </motion.div>
  )
}

export default CreateContainer