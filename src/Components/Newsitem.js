import React from 'react';

const Newsitem= (props) => {
  const { title, description, imageurl, newsUrl, date, source } = props;

  return (
    <div className="container my-3 ">
      <div className="card h-[450px]" style={{backgroundColor:props.mode==="white"?"white":"black" , border:props.mode==="white"?"3px solid black":"3px solid white" ,margin:"auto"}}>
        <img
          src={!imageurl ? 'https://th.bing.com/th/id/OIP.QVJu84EJyE9TGO493M3YmQHaCu?pid=ImgDet&rs=1' : imageurl}
          className="card-img-top h-[200px]"
          alt="..."
        />

        <div className="card-body text-center" style={{color: props.mode==="white"?"black":"white" }}>
          <div className="flex justify-end">
          <span className="position-absolute rounded-sm text-center top-0 badge mx-auto" style={{  backgroundColor:props.mode==="white"?"red":"green" }}>
            {source}

          </span>
          </div>
          <a href={newsUrl} target="_blank" className="readmore btn rounded-sm py-1 px-7" rel="noreferrer" style={{color:props.mode==="white"?"white":"black", backgroundColor:props.mode==="white"?"black":"white"}}>
            Read more
          </a>

          <h5 className={`card-title font-semibold m-[7px] ${props.mode==="white"?"text-black":"text-white"}`} >
            {title}...
          </h5>
          <p className={`card-text text-${props.mode==="white"?"black":"white"} `} >{description}...</p>
          <div className="flex justify-center">
            <p className="position-absolute bottom-0 mx-5 card-text fixed-element text-center font-bold" style={{ fontSize: '13px' }}>
              {new Date(date).toGMTString()}
            </p>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
