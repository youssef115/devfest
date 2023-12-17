import React from 'react'
import { Container, Row, Col } from "reactstrap"

import "../styles/home.css"
function Home() {

  const donors = [
    { name: 'John Doe', amount: '$100' },
    { name: 'Jane Smith', amount: '$50' },
    // Ajoutez autant d'entrées que nécessaire dans le tableau des donateurs
  ];

  const activities = [
    { activity: 'Food Donation', location: 'Community Center' },
    { activity: 'Clothing Drive', location: 'Shelter' },
    // Ajoutez autant d'activités que nécessaire dans le tableau des activités
  ];
  return (
    <>
    <div className="heroSection">
      <div className="Shadow">
        <p className="hero__text animate-bounce">
          Nomber of Donators : 1.000.000
        </p>
        

        <div className="row">
            <div className="col-md-6">
              <table className="table">
                {/* Tableau des donateurs */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {donors.map((donor, index) => (
                    <tr key={index}>
                      <td>{donor.name}</td>
                      <td>{donor.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="col-md-6">
              <table className="table">
                {/* Tableau des activités */}
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((activity, index) => (
                    <tr key={index}>
                      <td>{activity.activity}</td>
                      <td>{activity.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <button className="home__btn">Join Now</button>

      </div>
    </div>
    </>
  )
}

export default Home