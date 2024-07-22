import { useState } from "react";

const Section = ({ name, description,isVisible,setVisible }) => {
    const state = name.toLowerCase().slice(0,name.indexOf(' '));    
  return (
    <div className="border-black border-2 p-2 m-2">
      <p className="text-lg font-bold">{name}</p>
      {!isVisible?<button className="text-blue-400" onClick={()=>setVisible(state)}>Show</button>:<button className="text-blue-400" onClick={()=>setVisible('')}>Hide</button>}
      {isVisible && <p className="">{description}</p>}
    </div>
  );
};

const Instamart = () => {
    const [isVisible,setVisible] = useState('about');
  return (
    <div>
      <h1 className="text-2xl ">Instamart</h1>
      <Section
        name={"About Instamart"}
        description={
          "But now we will learn that what if want to create a info that can be used anywhere in our project to accomplish this first we will create a new file inside utils Usercontext.js and inside it we will import a new named import from react that is and pass some info inside it"
        }
        isVisible={isVisible === 'about'}
        setVisible={setVisible}
      />
      <Section
        name={"Menu Instamart"}
        description={
          "But now we will learn that what if want to create a info that can be used anywhere in our project to accomplish this first we will create a new file inside utils Usercontext.js and inside it we will import a new named import from react that is and pass some info inside it"
        }
        isVisible={isVisible === 'menu'}
        setVisible={setVisible}
      />
      <Section
        name={"Team Instamart"}
        description={
          "But now we will learn that what if want to create a info that can be used anywhere in our project to accomplish this first we will create a new file inside utils Usercontext.js and inside it we will import a new named import from react that is and pass some info inside it"
        }
        isVisible={isVisible === 'team'}
        setVisible={setVisible}
      />
    </div>
  );
};
export default Instamart;
