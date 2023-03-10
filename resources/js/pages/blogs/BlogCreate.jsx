import Container from '../../components/Container';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCreate = () => {
   const [title, setTitle] = useState();
   const [description, setDescription] = useState();
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('title', title);
      console.log('description', description);
      //call the api
      const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ title: title, description: description })
     };
     fetch('/api/posts', requestOptions).then(response => response.json())
         .then(data => {
            console.log('data',data)
            navigate('/blogs')
         });
 
   }

   return (<form className="w-full max-w-lg" onSubmit={handleSubmit}>
   <div className="flex flex-wrap -mx-3 mb-6">
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
         Title
       </label>
       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name='title' onChange={(e)=>setTitle(e.target.value)}/>
       <p className="text-red-500 text-xs italic">Please fill out this field.</p>
     </div>
     {/* <div className="w-full md:w-1/2 px-3">
       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
         Last Name
       </label>
       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
     </div> */}
   </div>
   <div className="flex flex-wrap -mx-3 mb-6">
     <div className="w-full px-3">
       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
         description
       </label>
       <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" onChange={(e)=>setDescription(e.target.value)} ></textarea>
       <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
     </div>
   </div>
   {/* <div className="flex flex-wrap -mx-3 mb-2">
     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
         City
       </label>
       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
     </div>
     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
         State
       </label>
       <div className="relative">
         <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
           <option>New Mexico</option>
           <option>Missouri</option>
           <option>Texas</option>
         </select>
         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
           <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
         </div>
       </div>
     </div>
     <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
         Zip
       </label>
       <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
     </div>
   </div> */}
   <button className='p-2 text-white text-lg bg-blue-500 inline-block'>Submit</button>
 </form>);
}

export default BlogCreate;