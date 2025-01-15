import { useSelector } from 'react-redux';
import '../../styles/staticsStyle.scss';
import '../../styles/dashboardStyle.css';
import { PiUsersThreeLight } from "react-icons/pi";
import { LiaComments } from "react-icons/lia";

const DashBoard = () => {
  const { username, role } = useSelector((state) => state.currentUser || {});
  const Comments = useSelector((state) => state.comments)
  const Users = useSelector((state) => state.users)
  const totalComments = Comments
  const totalUsers = Users.length
  console.log(username, role, totalUsers);
  const types = [
    {type:'Users', total:totalUsers, icon:<PiUsersThreeLight/>},
    {type:'Comments', total:totalComments, icon:<LiaComments/>}
  ];
  const categories = [
    { cat: "Main Course", color: '#FF6838' },
    { cat: "Appetizer", color: '#FFC820' },
    { cat: "Side Dish", color: '#97C95C' },
    { cat: "Soup", color: '#1CB2F6' },
    { cat: "Salad", color: '#1685B8' },
    { cat: "Dessert", color: '#e6df5d' },
    { cat: "Snack", color: '#ff3838' }
  ];

  return (
    <div className="dashboard">
      <h1 className="welcome">Welcome {role} {username}!</h1>
      <div className="totals">
        {types.map((type, idx)=>(
          <div className="up-box" key={idx}>
            <div className="content">
              <div className="writhing">
                <h3>{type.type}</h3>
                <h2>{type.total}</h2>
              </div>
              <p>{type.icon} </p>
            </div>
          </div>
        ))}
        
      </div>
      <div className="statics">
        {['Normal', 'Diet', 'Lactos-Free'].map((type, idx) => (
          <div className="box" key={type}>
            <div className="chart-content">
              <div className="chart">
                <h2>{type}</h2>
                <div className="donut" style={{ '--first': 0.35, '--second': 0.3, '--third': 0.12, '--fourth': 0.08, '--fifth': 0.07, '--sixth': 0.03, '--seventh': 0.05 }}>
                  <div className="donut__slice donut__slice__first"></div>
                  <div className="donut__slice donut__slice__second"></div>
                  <div className="donut__slice donut__slice__third"></div>
                  <div className="donut__slice donut__slice__fourth"></div>
                  <div className="donut__slice donut__slice__fifth"></div>
                  <div className="donut__slice donut__slice__sixth"></div>
                  <div className="donut__slice donut__slice__seventh"></div>
                  <div className="donut__label">
                    <div className="donut__label__heading">
                      <p>Recipies Ratings</p>
                    </div>
                    <div className="donut__label__sub">
                      <p>with Pure CSS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-key">
                {categories.map((category) => (
                  <div className="cat" key={category.cat}>
                    <div className="square" style={{ backgroundColor: category.color }}></div>
                    <p>{category.cat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="top-active-users">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email </th>
                        <th>comments</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
