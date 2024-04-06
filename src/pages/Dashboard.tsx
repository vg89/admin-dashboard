import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar"
import { BsSearch } from "react-icons/bs";
import userImg from "../assets/userpic.png";
import { HiTrendingUp,HiTrendingDown } from "react-icons/hi";
import data from '../assets/data.json'
import { BarChart,DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable"


const Dashboard = () => {
return(
    <div className="admin-container">
     <AdminSidebar/>
      <main className="dashboard">
        
        {/* first div mai humne upar wala bar banaya yaha profile aur search bar and all rahega */}
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="Search for data, users, docs"/>
          <FaRegBell/>
          <img src={userImg} alt="User" />
        </div>

        {/* then humne ek section banaya jaha widget honge to display the info and the circular percentage of the info */}
        <section className="widget-container">
            <WidgetItem 
            percent={40} 
            amount={true} 
            value={340000} 
            heading="Revenue" 
            color="rgb(0,115,255)"
            />
           <WidgetItem 
            percent={-14}  
            value={400} 
            heading="User" 
            color="rgb(0 198 202)"
            />

            <WidgetItem
            percent={80}
            value={23000}
            heading="Transactions"
            color="rgb(255 196 0)"
          />
            <WidgetItem 
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(76 0 255)"
            />
        </section>

      {/* now, we will make another section which willc contain the bar graphs and all wala part */}
      <section className="graph-container">
          {/* this section will have two divs, first one will contain the chart of the revenues and second one will have the different categories of the items in the dashboard */}
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
              <BarChart 
              data_1={[300,144,433,655,237,755,190]}
              data_2={[200,444,343,556,778,455,990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
              />
          </div>

          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
            {data.categories.map((i) => (
              <CategoryItem
                key={i.heading}
                heading={i.heading}
                value={i.value}
                //yaha randomly we multiplied by 4 to get different colours
                color={`hsl(${i.value * 4},${i.value}%,50%)`}
              />
            ))}
            </div>
          </div>
      </section>

      {/* now we make the area below the first bar graph which again consists of two parts: left part showing the gender ratio and right part consisting the transations */}

      <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>

            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />

            <p>
              <BiMaleFemale />
            </p>
          </div>

          <Table data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

//props for the widget items--------------------------------

interface WidgetItemProps{
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount?:boolean;
}

//component for the widget items:---------------------------

const WidgetItem=({heading,value,percent,color,amount=false}:WidgetItemProps)=><article className="widget">
  {/* in this component we create 2 divs, 1st div consists of the information present in the widget */}
  <div className="widget-info">
    <p>{heading}</p>
    <h4>{amount ? `$${value}`:value} </h4>
    {percent>0?(
      <span className="green">
        <HiTrendingUp/>+{percent}%{" "}
      </span>
    ):(
      <span className="red">
        <HiTrendingDown/>{percent}%{" "}
      </span>
    )}
  </div>

  {/* the second div consists of the info related to the percentage, shown in a circular form .Here inside widget circle we using conic gradient so that we can color only the the amount of percent required inside of colouring the entire circle */}
  <div className="widget-circle" style={{
    background:`conic-gradient(
      ${color} ${Math.abs(percent)/100*360}deg,
      rgb(255, 255, 255) 0
    )`
  }}>
      <span 
      style={{
        color,
      }}>{percent}%
      </span>
  </div>
</article>

//props for the category items---------------------------------------

interface CategoryItemProps{
  color:string;
  value:number;
  heading:string;
}

//component for the category  items which we will automatically fetch from the database----

const CategoryItem=({color,value,heading}:CategoryItemProps)=>{
  return(
    <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor:color,
        width:`${value}%`, //width will get modified on the basis of teh value, if its 40%, then width will be 40% and so on
      }}></div>
    </div>
    <span>{value}%</span>
  </div>
  );
}

export default Dashboard;
