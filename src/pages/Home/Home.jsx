import {React, useState} from "react";
import './Home.css';
import Navbar from '../../Component/Navbar/Navbar';
import { IoSend } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { useFormik } from "formik";
import { answerGpt } from "../../Apicall/genapi";

const Home = () => {
	const [gpt, setData] = useState([]);

	const handleAddData = (newData) => {
    setData((prevData) => [...prevData, ...newData]);
		// console.log(gpt)
  };
  const formik = useFormik({
    initialValues: {
      searching: "",
    },
    onSubmit:(values) => {

      // console.log(JSON.stringify(values, null, 2));
      answerGpt({
        searching: values.searching,
      })
        .then((response) => {
          handleAddData(response.data.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  })
	// console.log("Hallo",gpt?.data)
	return (
		<>
			<div className="home_nav">
				<Navbar />
				<div className="home_text">
        {gpt?.map((item)=>(
          <div className="display-api" key={item?.id}>
            	<div className="display-api1">
            <h3>{item?.user}:</h3>
						 </div>
						<div className="display-api2">
            <p>{item?.message}</p>
						
						{
							item.user!='You' ? (
        				<span><button type="submit" className="like" onClick={item?.like}>
						 <BiSolidLike/>
						 </button>
						 <button type="submit" className="dislike" onClick={item?.dislike}>
						 <BiSolidDislike/>
						 </button>	
						 </span>
     					):
							null
							}
							
					
						</div>
          </div>
        ))}
				</div>
       

				<form onSubmit={formik.handleSubmit}>
					<div className="input-container">
						<input
							id="searching"
							type="text"
							className="searching"
							placeholder="Search......"
							onChange={formik.handleChange}
							value={formik.values.searching}
						/>
						<button type="submit" className="container_send">
							<IoSend size={24} />
						</button>
						<button type="submit" className="container_voice">
							<FaMicrophone size={24} />
						</button>

					</div>
				</form>
			</div>
		</>
	);
};

export default Home;