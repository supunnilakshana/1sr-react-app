import React, { useState } from "react";
import NamelistItem from "./NamelistItem";

async function getdata() {
  var data;
  await fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((json) => {
      data = json.results[0];
      console.log(data);
    });
  return data;
}





function Namelist() {
  const [nAmelist, setuser] = useState([
    {
      gender: "male",
      name: {
        first: "brad",
        last: "gibson",
      },
      location: {
        city: "kilcoole",
      },
      email: "brad.gibson@example1.com",

      dob: {
        date: "1993-07-20T09:44:18.674Z",
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
    },
  ]);

  const nameListcomponent = () => {
    return nAmelist.map((element) => {
      return (
        <NamelistItem
          key={element.email}
          name={element.name.first + " " + element.name.last}
          city={element.location.city}
          dob={element.dob.date}
          email={element.email}
          avatar={element.picture.medium}
        />
      );
    });
  };

  const newuser = {
    gender: "male",
    name: {
      first: "brad",
      last: "gibson",
    },
    location: {
      city: "kilcoole",
    },
    email: "brad.gibson@example4.com",

    dob: {
      date: "1993-07-20T09:44:18.674Z",
    },
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
    },
  };

  const adduserhandeler = async () => {
    const data = await getdata();
    setuser((nAmelist) => nAmelist.concat(data));
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-primary mb-3" onClick={adduserhandeler}>
        Add
      </button>
      <ul className="list-group">{nameListcomponent()}</ul>
    </div>
  );
}

export default Namelist;
